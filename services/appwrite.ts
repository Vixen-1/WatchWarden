import { Client, Databases, ID, Query } from "react-native-appwrite";
// track the searches made by the user.

const databaseId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID ?? "";
const collectionId = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID ?? "";
const projectId= process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID ?? ""

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(projectId);

const database = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await database.listDocuments(databaseId, collectionId, [
      Query.equal("searchTerm", query),
    ]);
    // console.log(result);
    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await database.updateDocument(
        databaseId,
        collectionId,
        existingMovie.$id,
        {
          count: existingMovie.count + 1,
        }
      );
    } else {
      await database.createDocument(databaseId, collectionId, ID.unique(), {
        searchTerm: query,
        movie_id: movie.id,
        count: 1,
        title: movie.title,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
  try {
    const result = await database.listDocuments(databaseId, collectionId, [
      Query.limit(5),
      Query.orderDesc('count')
    ]);
    return result.documents as unknown as TrendingMovie[];
    
  } catch (err) {
    console.error(err);
  }
};
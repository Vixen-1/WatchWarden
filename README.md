# 🎬 MovieFlix

**MovieFlix** is a mobile application built with **React Native** that allows users to browse, search, and discover movies using **The Movie Database (TMDB)** API. It leverages **Appwrite** to track and store user search trends and includes a polished, responsive UI with masked view effects.

---

## ✨ Features

- **Browse Movies**: View trending (based on user searches in Appwrite) and latest movies from TMDB.
- **Search Movies**: Real-time search functionality powered by the TMDB API.
- **Dynamic Star Ratings**: Display ratings as stars (e.g., ★★★★ for a 7.8/10).
- **Trend Tracking**: Store search data in Appwrite and retrieve trending movies.
- **Responsive UI**: Built with React Native and Tailwind CSS (via `className`).
- **Masked View Effects**: Visually enhanced experience using masked views.
- **Robust Error Handling**: Smooth UI and graceful handling of API errors.

---

## 🛠 Tech Stack

| Layer      | Technology |
|------------|------------|
| **Frontend** | React Native, Expo |
| **Backend** | Appwrite |
| **API** | [TMDB API](https://www.themoviedb.org/) |
| **UI Libraries** | `@react-native-masked-view/masked-view`, Tailwind CSS |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Networking** | Custom `useFetch` hook |
| **Navigation** | Expo Router |
| **Environment** | Node.js, npm |

---

## 🚀 Installation

### 📦 Prerequisites

- Node.js (v18 or higher)
- npm or Yarn
- Expo CLI (`npm install -g expo-cli`)
- Appwrite server (self-hosted or [cloud](https://cloud.appwrite.io/))
- TMDB API key ([get one here](https://www.themoviedb.org/signup))

---

### 🧰 Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-flix.git
cd movie-flix
```


#### 2. Install Dependencies:

```bash
npm install
```

#### 3. Set Up Environment Variables: Create a .env file in the root directory and add:

```bash
EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
EXPO_PUBLIC_APPWRITE_DB_ID=your_appwrite_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

#### 4. Configure Appwrite:

- Create a database and collection in Appwrite with the following attributes:
- searchTerm (string, required)
- movie_id (integer, required)
- count (integer, required)
- title (string, required)
- poster_url (string, optional)
- vote_average (float, optional, for star ratings)
- Add an index on count (type: key, order: DESC) for trending queries.
- Set collection permissions to allow role:any or role:users for Create and Update.


#### 5. Start App

```bash
npx expo start
```

#### 6. Clear cache:

```bash
npm start -- --reset-cache
```
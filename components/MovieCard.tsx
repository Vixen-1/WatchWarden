import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  const starCount = vote_average ? Math.round(vote_average / 2) : 0;
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : `https://placehold.co/600*400/1a1a1a/ffffff.png`,
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white" numberOfLines={1}>{title}</Text>
        <View className="flex-row items-center justify-start gap-x-1">
            {[...Array(starCount)].map((_, index) => (
            <Image
              key={`${id}-star-${index}`}
              source={icons.star}
              className="size-4"
              resizeMode="contain"
            />
          ))}
        </View>
        <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 font-medium mt-1">{release_date?.split('-')[0]}</Text>
            {/* <Text className="text-xs font-medium text-light-300 uppercase">Movie</Text> */}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

import { ImageBackground, Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: (focused) => {
            return (
              <>
                <ImageBackground
                  source={images.highlight}
                  className="flex flex-row w-full flex-1 min-w-[112px] min-h=[14] mt-4 justify-center items-center rounded-full overflow-hidden"
                >
                  <Image
                    source={icons.home}
                    tintColor={"#141312"}
                    className="size-5"
                  />
                  <Text className="text-secondary text-base font-semibold mt-2">
                    Home
                  </Text>
                </ImageBackground>
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;

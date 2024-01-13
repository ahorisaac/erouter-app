import { Tabs, router } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Button } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button
              title="Add New Feed"
              onPress={() => router.push("feed/new")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
};

export default _layout;

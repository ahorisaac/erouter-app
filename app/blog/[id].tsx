import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const { id, author } = useLocalSearchParams();
  const router = useRouter();

  return (
    <React.Fragment>
      {/* header */}
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />

      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Blog Post Details</Text>
          <Text style={styles.subtitle}>
            This is the blog post with id {id}.
          </Text>
          <Text style={styles.subtitle}>
            Written by {author}.
          </Text>
          <Button onPress={() => router.back()} title="Go Back" />
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default Page;

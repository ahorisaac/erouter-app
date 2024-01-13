import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.subtitle}>This is the home page of your app.</Text>
        <Link href={"/about"} style={[{ marginVertical: 12 }]}>
          <Text>Go to About Page</Text>
        </Link>
        {/*  @ts-ignore */}
        <Link href={"/blog"} asChild style={[{ marginVertical: 12 }]}>
          <Button title="Go to Blog Page" />
        </Link>

        <Link href={"/(tabs)/feed"} asChild style={[{ marginVertical: 12 }]}>
          <Button title="Go to Feed Page" />
        </Link>
      </View>
    </View>
  );
}

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

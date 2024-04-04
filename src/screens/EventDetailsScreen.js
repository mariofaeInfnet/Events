import { useState } from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";

export default function EventDetailsScreen({ route }) {
  const { params } = route;
  const {
    event: { name, description, images },
  } = params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: images[0] }} />

      <Text>{name}</Text>
      <ScrollView>
        <Text>{description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
});

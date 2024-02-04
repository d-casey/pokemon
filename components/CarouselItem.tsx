import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { InfoList } from "./InfoList";

export const CarouselItem = ({ pokemon }) => {
  return (
    <>
      <View style={styles.pokemonBox}>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: pokemon.image,
          }}
        />
        <InfoList pokemonData={pokemon} />
      </View>

      <View style={styles.description}>
        <Text style={styles.title}>Description</Text>
        <Text>{pokemon.description}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pokemonBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightcyan",
    marginLeft: "3%",
  },
  pokemonImage: {
    width: 160,
    height: 160,
  },

  description: {
    flex: 1,
    backgroundColor: "lightcyan",
    padding: 20,
    marginLeft: "3%",
  },
  title: {
    fontWeight: "bold",
  },
});

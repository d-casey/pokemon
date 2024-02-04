import React from "react";
import {
    Button,
    Dimensions,
    FlatList,
    Image,
    Text,
    View,
    StyleSheet,
  } from "react-native";

export const InfoList = ({ pokemonData }) => {
  const infoDataMap = [
    { key: "ID: " + pokemonData.pokedexNumber },
    { key: "Name: " + pokemonData.name },
    { key: "Height: " + pokemonData.height },
    { key: "Weight: " + pokemonData.weight },
  ];

  return (
    <FlatList
      data={infoDataMap}
      renderItem={({ item }) => (
        <Text style={styles.pokemonInfo}>{item.key}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
    pokemonInfo: {
      fontSize: 15,
      height: 30,
    },
  });
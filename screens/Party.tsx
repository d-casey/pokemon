import React from "react";
import {
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { InfoList } from "../components/InfoList";
import { PokemonData } from "./Pokedex";
import { CarouselItem } from "../components/CarouselItem";

export const Party = ({ route }) => {
  const PAGE_WIDTH = Dimensions.get("window").width;
  const PAGE_HEIGHT = Dimensions.get("window").height;
  const party: Array<PokemonData> = route?.params?.partyPokemon;

  return (
    <View style={[styles.container]}>
      {party?.length ? (
        <Carousel
          loop={false}
          vertical={false}
          width={PAGE_WIDTH * 0.8}
          height={PAGE_HEIGHT * 0.5}
          autoPlay={false}
          style={{ width: "100%" }}
          pagingEnabled={true}
          data={party}
          scrollAnimationDuration={500}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <>
              <CarouselItem pokemon={item} />
            </>
          )}
        />
      ) : (
        null
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "lightcoral",
  },
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

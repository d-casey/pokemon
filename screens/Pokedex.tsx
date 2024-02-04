import React, { useEffect, useState } from "react";
import {
  Button,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { generateDescriptions, getPokemon } from "../api/getPokemon";
import { CarouselItem } from "../components/CarouselItem";

export type PokemonData = {
  image?: string;
  name: string;
  height: string;
  weight: string;
  pokedexNumber: number;
  description?: string; 
};

export const Pokedex = ({ navigation }) => {
  const PAGE_WIDTH = Dimensions.get("window").width;
  const PAGE_HEIGHT = Dimensions.get("window").height;
  const [pokemon, setPokemon] = useState<Array<PokemonData>>([]);
  const [descriptions, setDescriptions] = useState<Array<string>>([]);
  const [party, setParty] = useState<Array<PokemonData>>([]);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    try {
      getPokemon().then((data) => {
        setPokemon(data);
      });
      generateDescriptions().then((data) => {
        setDescriptions(data);
      });
    } catch {
      setFetchError("error fetching API data");
    }
  }, []);

  const pokemonWithDescriptions = pokemon.map((poke, index) => {
    return { ...poke, description: descriptions[index] };
  });

  return (
    <>
      <View style={[styles.container]}>
        <Carousel
          loop
          vertical={false}
          width={PAGE_WIDTH * 0.8}
          height={PAGE_HEIGHT * 0.5}
          autoPlay={false}
          style={{ width: "100%" }}
          pagingEnabled={true}
          data={pokemonWithDescriptions}
          scrollAnimationDuration={500}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <>
              <CarouselItem pokemon={item} />
              <View style={styles.buttonContainer}>
                <Button
                  title={"Add to Party"}
                  onPress={() => {
                    setParty([...party, item]);
                  }}
                />
              </View>
            </>
          )}
        />
        {party?.length ? (
          <View style={styles.partyButton}>
            <Button
              title={"View Party"}
              onPress={() => {
                navigation.navigate("Party", {
                  partyPokemon: party,
                });
              }}
            />
          </View>
        ) : null }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "lavender",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
  },
  partyButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
});

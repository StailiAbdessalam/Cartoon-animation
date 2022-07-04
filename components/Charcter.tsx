import React from "react";
// import Image from "next/image";
import { Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Character = ({ characters }:any) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((character:any) => {
        return (
          <div key={character.id}>
            <img src={character.image} width={300} height={300} />
            <Heading as="h4"  size="md">
              {character.name}
            </Heading>
            <Text align="center">Origin: {character.origin.name}</Text>
            <Text align="center">Location: {character.location.name}</Text>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default Character;

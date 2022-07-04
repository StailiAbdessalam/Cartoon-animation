import Head from "next/head";
import { useState } from "react";
import Styles from "../styles/Home/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  Heading,
  Input,
  Stack,
  IconButton,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

import Character from "../components/Charcter";
const index = (results:any) => {
  const intialState :any = results;
  const [search, setSearch]:any = useState("");
  const [characters, setCharacters]:any = useState(intialState.characters);
  const toast:any = useToast();
  return (
    <Flex direction="column" justify="center" align="center">
      <Head>
        <title>NextJS Apollo Crash Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={4} flexDirection="column"  py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Rick and Morty{" "}
        </Heading>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const results = await fetch("/api/SearchCharacters", {
              method: "post",
              body: search,
            });
            const { characters, error } = await results.json();
            if (error) {
              toast({
                position: "bottom",
                title: "An error occurred.",
                description: error,
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            } else {
              setCharacters(characters);
            }
          }}
        >
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search"
              value={search}
              border="none"
              onChange={(e:any) => setSearch(e.target.value)}
            ></Input>
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              disabled={search === ""}
              type="submit"
            />
            <IconButton
              colorScheme="red"
              aria-label="Reset "
              icon={<CloseIcon />}
              disabled={search === ""}
              onClick={async () => {
                setSearch("");
                setCharacters(intialState.characters);
              }}
            />
          </Stack>
        </form>
        <Character characters={characters} />
      </Box>

      <footer className={Styles.footer}>
        Powered by STaili abdessalam didikasse l meknes hh.
      </footer>
    </Flex>
  );
};


export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            pages
          }
          results {
            name
            id
            location {
              name
              id
            }
            image
            origin {
              name
              id
            }
            episode {
              id
              episode
              air_date
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
}


export default index;

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

export default async (req:any,res:any) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query {
          characters(filter: { name: "${search}" }) {
            info {
              count
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
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error:any) {
    if (error.message === "404: Not Found") {
      res.status(404).json({ characters: null, error: "No Characters found" });
    } else {
      res
        .status(500)
        .json({ characters: null, error: "Internal Error, Please try again" });
    }
  }
};

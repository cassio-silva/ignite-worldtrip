import { Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Cards from "./Cards";

type CitiesProps = {
  name: string;
  country: string;
  imgSrc: string;
  countryCode: string;
}

type CitiesList = {
  cities: CitiesProps[]
}

export default function Cities({ cities }: CitiesList) {

  return (
    <Flex
      direction={"column"}
      maxW={"1160px"}
      w={["95%", "100%"]}
      mx={"auto"}
      mb={"1rem"}
    >
      <Heading
        fontWeight={"500"}
        fontSize={["1.5rem", "2.25rem"]}
        color={"gray.300"}
        mb={"2.5rem"}
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={["unset", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        templateRows={[`repeat(${cities.length}, 1fr)`, `unset`]}
        gap={6}
        paddingBottom={"1rem"}
      >
        {
          cities.map((item) => (
            <Cards
              name={item.name}
              country={item.country}
              imgSrc={item.imgSrc}
              countryCode={item.countryCode}
              height={"12"}
            />
          ))
        }
      </Grid>
    </Flex>
  )
}
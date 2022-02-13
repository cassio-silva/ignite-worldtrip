import { Flex, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Logo from "../components/Logo";
import Cities from "../components/pages/cities/Cities";
import Header from "../components/pages/Header";
import TextHighlighted from "../components/pages/TextHighlighted";

type CitiesProps = {
  name: string;
  country: string;
  imgSrc: string;
  countryCode: string;
}

export default function Na() {
  const cities: CitiesProps[] = [
    {
      name: "Nova Iorque",
      country: "EUA",
      imgSrc: "/pages/na/ny.jpg",
      countryCode: "us"
    },
    {
      name: "Miami",
      country: "EUA",
      imgSrc: "/pages/na/miami.jpg",
      countryCode: "us"
    },
    {
      name: "Los Angeles",
      country: "EUA",
      imgSrc: "/pages/na/la.jpg",
      countryCode: "us"
    },
    {
      name: "Las Vegas",
      country: "EUA",
      imgSrc: "/pages/na/las-vegas.jpg",
      countryCode: "us"
    },
    {
      name: "Cancun",
      country: "Mexico",
      imgSrc: "/pages/na/cancun.jpg",
      countryCode: "mx"
    },
    {
      name: "Orlando",
      country: "EUA",
      imgSrc: "/pages/na/orlando.jpg",
      countryCode: "us"
    },
    {
      name: "Toronto",
      country: "Canadá",
      imgSrc: "/pages/na/toronto.jpg",
      countryCode: "ca"
    },
    {
      name: "Vancouver",
      country: "Canadá",
      imgSrc: "/pages/na/vancouver.jpg",
      countryCode: "ca"
    },
  ]

  return (
    <Flex
      direction={"column"}
    >
      <Head>
        <title>América do Norte</title>
      </Head>
      <Logo />

      <Header bg='pages/na/na.jpg' continent='América do Norte' />

      <Flex
        as={"main"}
        direction={"column"}
        w={["95%", "90%"]}
        mx={"auto"}
      >
        <Stack
          spacing={["8", "8", "8", "0"]}
          direction={["column", "column", "row"]}
          justify={"space-between"}
          maxW={"1160px"}
          width={"100%"}
          marginX={"auto"}
          marginY={"3rem"}
        >
          <Text
            maxW={["100%", "100%", "45%"]}
            color={"gray.300"}
            textAlign={"justify"}
          >
            O subcontinente da América do Norte compreende o Canadá,
            México, Groenlândia e os Estados Unidos da América (EUA).
            Limita-se ao sul com a América Central na fronteira entre o
            México, Guatemala e Belize, a norte com o Oceano Glacial Ártico,
            a leste com o Oceano Atlântico e a oeste com o Pacífico.
          </Text>

          <TextHighlighted
            countryAmount={"3"}
            languageAmount={"6"}
            citiesAmount={"8"}
          />

        </Stack>

        <Cities cities={cities} />
      </Flex>
    </Flex>
  )
}
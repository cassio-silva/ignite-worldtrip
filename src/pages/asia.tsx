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

export default function Asia() {
  const cities: CitiesProps[] = [
    {
      name: "Hong Kong",
      country: "China",
      imgSrc: "/pages/asia/hk.jpg",
      countryCode: "cn",
    },
    {
      name: "Bangkok",
      country: "Tailândia",
      imgSrc: "/pages/asia/bangkok.jpg",
      countryCode: "th",
    },
    {
      name: "Macau",
      country: "China",
      imgSrc: "/pages/asia/macau.jpg",
      countryCode: "cn",
    },
    {
      name: "Singapore",
      country: "Singapore",
      imgSrc: "/pages/asia/singapore.jpg",
      countryCode: "sg",
    },
    {
      name: "Dubai",
      country: "Emirados Árabes",
      imgSrc: "/pages/asia/dubai.jpg",
      countryCode: "ae",
    },
    {
      name: "Kuala Lumpur",
      country: "Malásia",
      imgSrc: "/pages/asia/kuala.jpg",
      countryCode: "my",
    },
    {
      name: "Instambul",
      country: "Turquia",
      imgSrc: "/pages/asia/instambul.jpg",
      countryCode: "tr",
    },
    {
      name: "Deli",
      country: "India",
      imgSrc: "/pages/asia/deli.jpg",
      countryCode: "in",
    },
  ]

  return (
    <Flex
      direction={"column"}
    >
      <Head>
        <title>Ásia</title>
      </Head>

      <Logo />

      <Header country="Ásia" bg="/pages/asia/china.jpg" />

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
            A Ásia é o maior continente em área terrestre do mundo,
            estando boa parte do continente localizado no Hemisfério Norte.
            Além de ser o mais extenso, é também o mais populoso, habitando
            nele cerca de três quintos da população mundial. A Ásia é multicultural,
            abrigando diversas culturas, etnias, religiões e tradições.
          </Text>

          <Flex
            w={["100%", "100%", "45%"]}
            direction={"row"}
            justify={"space-between"}
            align={"center"}
          >
            <TextHighlighted number='49' label='países' />
            <TextHighlighted number='2,300' label='línguas' />
            <TextHighlighted number='24' label='cidades +100' />
          </Flex>
        </Stack>

        <Cities cities={cities} />
      </Flex>

    </Flex>
  )
}
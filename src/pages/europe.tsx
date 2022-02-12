import Head from 'next/head';
import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import Logo from '../components/Logo';
import Header from '../components/pages/Header';
import TextHighlighted from '../components/pages/TextHighlighted';
import Cities from '../components/pages/cities/Cities';

type CitiesProps = {
  name: string;
  country: string;
  imgSrc: string;
  countryCode: string;
}

export default function Europa() {
  const cities: CitiesProps[] = [
    {
      name: "Londres",
      country: "Reino Unido",
      imgSrc: "/pages/europe/londres.png",
      countryCode: "gb"
    },
    {
      name: "Paris",
      country: "França",
      imgSrc: "/pages/europe/paris.png",
      countryCode: "fr"
    },
    {
      name: "Roma",
      country: "Itália",
      imgSrc: "/pages/europe/roma.png",
      countryCode: "it"
    },
    {
      name: "Praga",
      country: "República Tcheca",
      imgSrc: "/pages/europe/praga.png",
      countryCode: "cz"
    },
    {
      name: "Amsterdã",
      country: "Holanda",
      imgSrc: "/pages/europe/amsterda.png",
      countryCode: "nl"
    },
  ]

  return (
    <Flex
      direction={"column"}
    >
      <Head>
        <title>Europa</title>
      </Head>
      <Logo />

      <Header bg='/pages/europe/europe.png' country='Europa' />

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
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex
            w={["100%", "100%", "45%"]}
            direction={"row"}
            justify={"space-between"}
            align={"center"}
          >
            <TextHighlighted number='50' label='países' />
            <TextHighlighted number='60' label='línguas' />
            <TextHighlighted number='27' label='cidades +100' />
          </Flex>
        </Stack>

        <Cities cities={cities} />
      </Flex>
    </Flex>
  )
}
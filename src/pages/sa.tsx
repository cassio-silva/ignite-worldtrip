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

export default function Sa() {

  const cities: CitiesProps[] = [
    {
      name: "Buenos Aires",
      country: "Argentina",
      imgSrc: "/pages/sa/buenos-aires.jpg",
      countryCode: "ar"
    },
    {
      name: "Lima",
      country: "Peru",
      imgSrc: "/pages/sa/lima.jpg",
      countryCode: "pe"
    },
    {
      name: "Rio de Janeiro",
      country: "Brazil",
      imgSrc: "/pages/sa/rj.jpg",
      countryCode: "br"
    },
  ]

  return (
    <Flex
      direction={"column"}
    >
      <Head>
        <title>América do Sul</title>
      </Head>
      <Logo />

      <Header bg='sa.jpg' continent='América do Sul' />

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
            Com uma extensão de cerca de 17,8 milhões de km², a América do Sul comporta 6%
            da população mundial dividida em 12 países e 7 territórios. São eles a Argentina,
            Bolívia, Brasil, Chile, Colômbia, Equador, Guiana, Paraguai, Peru, Suriname, Uruguai
            e Venezuela e, os territórios da Guiana Francesa, Ilha de Páscoa, Ilhas Galápagos,
            Ilhas Geórgia e Sandwich e Ilhas Malvinas. Limita-se ao norte com a América Central,
            à leste com o oceano atlântico e à oeste com o oceano pacífico.
          </Text>

          <TextHighlighted
            countryAmount={"12"}
            languageAmount={"456"}
            citiesAmount={"3"}
          />

        </Stack>

        <Cities cities={cities} />
      </Flex>
    </Flex>
  )
}
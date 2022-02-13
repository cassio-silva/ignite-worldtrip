import { Flex, Stack, Text } from "@chakra-ui/react"
import Head from "next/head"
import Logo from "../components/Logo"
import Cities from "../components/pages/cities/Cities"
import Header from "../components/pages/Header"
import TextHighlighted from "../components/pages/TextHighlighted"

type CitiesProps = {
  name: string;
  country: string;
  imgSrc: string;
  countryCode: string;
}

export default function Oceania() {
  const cities: CitiesProps[] = [
    {
      name: "Sydney",
      country: "Austrália",
      imgSrc: "/oceania.jpg",
      countryCode: "au"
    },
    {
      name: "Auckland",
      country: "Nova Zelândia",
      imgSrc: "/pages/oceania/auckland.jpg",
      countryCode: "nz"
    },
    {
      name: "Melbourne",
      country: "Austrália",
      imgSrc: "/pages/oceania/melbourne.jpg",
      countryCode: "au"
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

      <Header bg='pages/oceania/oceania.jpg' continent='Oceania' />

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
            A Oceania é um continente situado entre os oceanos Índico e Pacífico, 
            a sudeste da Ásia. A maior parte de suas terras fica no Hemisfério 
            Sul do planeta. É composto por 14 países e ilhas e territórios pertencentes 
            a outros países, tanto oceânicos quanto de outros continentes. A maior 
            e mais populosa das nações é a Austrália, que consiste também na principal 
            economia do continente.
          </Text>

          <TextHighlighted
            countryAmount={"14"}
            languageAmount={"17"}
            citiesAmount={"3"}
          />

        </Stack>

        <Cities cities={cities} />
      </Flex>
    </Flex>
  )
}
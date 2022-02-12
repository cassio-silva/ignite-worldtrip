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
      name: "Joanesburgo",
      country: "África do Sul",
      imgSrc: "/pages/africa/johanesburg.jpg",
      countryCode: "za"
    },
    {
      name: "Marraquexe",
      country: "Marrocos",
      imgSrc: "/pages/africa/marraquexe.jpg",
      countryCode: "ma"
    },    
    {
      name: "Hurgada",
      country: "Egito",
      imgSrc: "/pages/africa/egypt.jpg",
      countryCode: "eg"
    },    
  ]

  return (
    <Flex
      direction={"column"}
    >
      <Head>
        <title>África</title>
      </Head>

      <Logo />

      <Header country="África" bg="pages/africa/africa.jpg" />

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
            África é um dos seis continentes do mundo, sendo o terceiro maior
            em extensão territorial. O território estende-se por mais de 30 milhões
            de km², ocupando, aproximadamente, 20% da área continental da Terra. No
            continente vive mais de um bilhão de habitantes, fazendo dele o segundo
            mais populoso entre os demais.
          </Text>

          <Flex
            w={["100%", "100%", "45%"]}
            direction={"row"}
            justify={"space-between"}
            align={"center"}
          >
            <TextHighlighted number='54' label='países' />
            <TextHighlighted number='1000+' label='línguas' />
            <TextHighlighted number='3' label='cidades +100' />
          </Flex>
        </Stack>

        <Cities cities={cities} />
      </Flex>

    </Flex>
  )
}
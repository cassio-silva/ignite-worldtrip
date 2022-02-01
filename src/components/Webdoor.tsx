import { Flex, Heading, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export default function Webdoor() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w={"100%"}
      backgroundImage={"/sky-bg.png"}
      backgroundPosition={"center"}
      bgSize={"cover"}
      justify={"space-evenly"}
      align={"center"}
      direction={"row"}
      h={["unset","21rem"]}
      py={["2rem","0"]}
    >
      <Flex
        direction={"column"}
        width={"90%"}
        maxW={"30rem"}
      >
        <VStack
          spacing={["3", "4"]}
          align={"start"}
        >
          <Heading
            color={"gray.50"}
            fontWeight={"500"}
            fontSize={["1.25rem", "2.25rem"]}
          >
            5 Continentes,
          </Heading>
          <Heading
            color={"gray.50"}
            fontWeight={"500"}
            fontSize={["1.25rem", "2.25rem"]}
          >
            infinitas possibilidades
          </Heading>
        </VStack>
        <Text
          color={"gray.100"}
          mt={"1.5rem"}
          fontSize={["0.875rem", "1.25rem"]}
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Flex mb={"-8rem"}>
          <img src="/airplane-clouds.png" alt="Avião nas nuvens" />
        </Flex>
      )}
    </Flex>
  )
}
import { Flex, HStack, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Categories() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w={"90%"}
      mx={"auto"}
      my={["2.25rem", "5rem"]}
      justify={["center", "space-evenly"]}
      align={"center"}
      direction={["column", "row"]}
      maxW={"1160px"}
    >
      <HStack
        spacing={["0", "14"]}
        mb={["1.5rem", "0"]}
      >
        <Stack
          justify={"center"}
          align={"center"}
          width={"10rem"}
        >
          {isWideVersion && (
            <Image
              src="/icons/cocktail.png"
              width={"85px"}
              height={"85px"}
            />
          )}
          <Text
            color={"gray.300"}
            fontSize={["1.125rem","1.5rem"]}
            fontWeight={["500","semibold"]}
            _before={{
              content: !isWideVersion && `"● "`,
              color: "orange"
            }}
          >
            vida noturna
          </Text>
        </Stack>
        <Stack
          justify={"center"}
          align={"center"}
          width={"10rem"}
        >
          {isWideVersion && (
            <Image
              src="/icons/surf.png"
              width={"85px"}
              height={"85px"}
            />
          )}
          <Text
            color={"gray.300"}
            fontSize={["1.125rem","1.5rem"]}
            fontWeight={["500","semibold"]}
            _before={{
              content: !isWideVersion && `"● "`,
              color: "orange"
            }}
          >
            praia
          </Text>
        </Stack>
      </HStack>
      <HStack
        spacing={["0", "14"]}
        mb={["1.5rem", "0"]}
      >
        <Stack
          justify={"center"}
          align={"center"}
          width={"10rem"}
        >
          {isWideVersion && (
            <Image
              src="/icons/building.png"
              width={"85px"}
              height={"85px"}
            />
          )}
          <Text
            color={"gray.300"}
            fontSize={["1.125rem","1.5rem"]}
            fontWeight={["500","semibold"]}
            _before={{
              content: !isWideVersion && `"● "`,
              color: "orange"
            }}
          >
            moderno
          </Text>
        </Stack>
        <Stack
          justify={"center"}
          align={"center"}
          width={"10rem"}
        >
          {isWideVersion && (
            <Image
              src="/icons/museum.png"
              width={"85px"}
              height={"85px"}
            />
          )}
          <Text
            color={"gray.300"}
            fontSize={["1.125rem","1.5rem"]}
            fontWeight={["500","semibold"]}
            _before={{
              content: !isWideVersion && `"● "`,
              color: "orange"
            }}
          >
            clássico
          </Text>
        </Stack>
      </HStack>
      <Stack
        justify={"center"}
        align={"center"}
        width={"10rem"}
      >
        {isWideVersion && (
          <Image
            src="/icons/earth.png"
            width={"85px"}
            height={"85px"}
          />
        )}
        <Text
          color={"gray.300"}
          fontSize={["1.125rem","1.5rem"]}
          fontWeight={["500","semibold"]}
          _before={{
            content: !isWideVersion && `"● "`,
            color: "orange"
          }}
        >
          e mais...
        </Text>
      </Stack>
    </Flex>
  )
}
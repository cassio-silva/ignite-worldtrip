import { Flex, Image, Text } from "@chakra-ui/react";

type HeaderProps = {
  continent: string;
  bg: string;
}

export default function Header({ continent, bg }: HeaderProps) {
  return (
    <Flex
      as={"header"}
      position={"relative"}
      direction={"column"}
      justify={["center", "flex-end"]}
      alignItems={["center", "flex-start"]}
    >
      <Image
        src={bg}
        width={"100%"}
        height={["150px", "250px", "250px", "500px"]}
      />
      <Text
        fontSize={["1.75rem", "3rem"]}
        fontWeight={"600"}
        color={"#FFF"}
        position={"absolute"}
        paddingLeft={["unset", "8.75rem"]}
        paddingBottom={["unset", "3.75rem"]}
      >
        {continent}
      </Text>
    </Flex>
  )
}
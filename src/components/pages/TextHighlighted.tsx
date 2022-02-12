import { Flex, Heading } from "@chakra-ui/react";

type TextHighlightedProps = {
  number: string;
  label: string;
}

export default function TextHighlighted({ number, label }: TextHighlightedProps) {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={["flex-start","center"]}
    >
      <Heading
        fontSize={["1.5rem","1.5rem","1.5rem","2.5rem"]}
        fontWeight={"600"}
        color={"orange"}
      >
        {number}
      </Heading>
      <Heading
        fontSize={["1.125rem","1.125rem","1.125rem","1.5rem"]}
        fontWeight={"600"}
        color={"gray.300"}
      >
        {label}
      </Heading>
    </Flex>
  )
}
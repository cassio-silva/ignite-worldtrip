import { useRef } from "react";
import { Box, Flex, Heading, Icon, Tooltip } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

type TextHighlightedProps = {
  // number: string;
  // label: string;
  // tooltip?: boolean;
  countryAmount: string;
  languageAmount: string;
  citiesAmount: string;
}


export default function TextHighlighted({ citiesAmount, countryAmount, languageAmount }: TextHighlightedProps) {
  return (
    <Flex
      w={["100%", "100%", "45%"]}
      direction={"row"}
      justify={"space-evenly"}
      align={"center"}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={["flex-start", "center"]}
      >
        <Heading
          fontSize={["1.5rem", "1.5rem", "1.5rem", "2.5rem"]}
          fontWeight={"600"}
          color={"orange"}
        >
          {countryAmount}
        </Heading>
        <Heading
          fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
          fontWeight={"600"}
          color={"gray.300"}
        >
          países
        </Heading>
      </Flex>
      <Flex
        direction={"column"}
        justify={"center"}
        align={["flex-start", "center"]}
      >
        <Heading
          fontSize={["1.5rem", "1.5rem", "1.5rem", "2.5rem"]}
          fontWeight={"600"}
          color={"orange"}
        >
          {languageAmount}
        </Heading>
        <Heading
          fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
          fontWeight={"600"}
          color={"gray.300"}
        >
          línguas
        </Heading>
      </Flex>
      <Flex
        direction={"column"}
        justify={"center"}
        align={["flex-start", "center"]}
      >
        <Heading
          fontSize={["1.5rem", "1.5rem", "1.5rem", "2.5rem"]}
          fontWeight={"600"}
          color={"orange"}
        >
          {citiesAmount}
        </Heading>
        <Heading
          fontSize={["1.125rem", "1.125rem", "1.125rem", "1.5rem"]}
          fontWeight={"600"}
          color={"gray.300"}
          position={"relative"}
        >
          cidades +100
          <Box
            position={"absolute"}
            right={"-1.25rem"}
            bottom={0}
          >
            <Tooltip
              label="As 100 Cidades mais visitadas do mundo"
              fontSize={"sm"}
              hasArrow
            >
              <span>
                <Icon
                  as={FiInfo}
                  w={4}
                  h={4}
                  color={"gray.100"}
                  ml={["0.25rem", "0.5rem"]}
                />
              </span>
            </Tooltip>
          </Box>
        </Heading>
      </Flex >
    </Flex >
  )
}
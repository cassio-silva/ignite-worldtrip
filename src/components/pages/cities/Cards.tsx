import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { CustomCircleFlag } from "../../CustomCircleFlag";

type CardsProps = {
  name: string;
  country: string;
  imgSrc: string;
  countryCode: string;
  height?: string;
}

export default function Cards({
  name,
  country,
  imgSrc,
  countryCode,
  height
}: CardsProps) {
  return (
    <Flex
      direction={"column"}
      borderRadius={"4px"}
      w={"100%"}
      maxW={"16rem"}
      h={"17.5rem"}
      mx={"auto"}
      mb={"1rem"}
    >
      <Image
        borderTopRadius={"4px"}
        w={"100%"}
        h={"100%"}
        maxH={"173px"}
        src={imgSrc}
        alt=""
      />
      <Flex
        direction={"row"}
        justify={"space-between"}
        borderBottom={"1px"}
        borderBottomRadius={"4px"}
        borderLeft={"1px"}
        borderRight={"1px"}
        borderColor={"orange"}
        padding={"1rem 1.5rem"}
      >
        <Flex
          direction={"column"}
        >
          <Heading
            fontFamily={"Barlow"}
            fontSize={"1.25rem"}
            color={"gray.300"}
            mb={"1rem"}
          >
            {name}
          </Heading>
          <Text
            fontFamily={"Barlow"}
            fontSize={"1rem"}
            color={"gray.200"}
            mb={"0.5rem"}
          >
            {country}
          </Text>
        </Flex>
        <Flex
          height={"2rem"}
          mt={"1rem"}
        >
          <CustomCircleFlag
            countryCode={countryCode}
            height={height}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
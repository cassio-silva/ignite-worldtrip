import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Heading, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {

  SwiperCore.use([Navigation, Pagination]);

  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      width={["100%", "90%"]}
      mx={"auto"}
    >
      <VStack spacing={"2"}>
        <Heading
          fontSize={["1.25rem", "2.25rem"]}
          fontWeight={"medium"}
          color={"gray.300"}
          textAlign={"center"}
        >
          Vamos nessa?
        </Heading>
        <Heading
          fontSize={["1.25rem", "2.25rem"]}
          fontWeight={"medium"}
          color={"gray.300"}
          textAlign={"center"}
        >
          Então escolha seu continente
        </Heading>
      </VStack>

      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide>
          <Image
            src="europe.png"
            w={"100%"}
            h={"100%"}
            position={"relative"}
          />
          <Link href={"/europe"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.5rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                Europa
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                O continente mais antigo
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="asia.jpg"
            w={"100%"}
            h={"100%"}
            position={"relative"}
            sx={{
              filter: 'brightness(0.85)'
            }}
          />
          <Link href={"/asia"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.25rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                Ásia
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                O maior continente do mundo
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="africa.jpg"
            w={"100%"}
            h={"100%"}
            position={"relative"}
            sx={{
              filter: 'brightness(0.6)'
            }}
          />
          <Link href={"/africa"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.25rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                África
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                A maior quantidade de etnias do Planeta
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="sa.jpg"
            w={"100%"}
            h={"100%"}
            position={"relative"}
          />
          <Link href={"sa"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.25rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                América do Sul
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                Centenas de idiomas
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="na.jpg"
            w={"100%"}
            h={"100%"}
            position={"relative"}
          />
          <Link href={"na"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.25rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                América do Norte
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                Abriga a maior ilha do mundo
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="oceania.jpg"
            w={"100%"}
            h={"100%"}
            position={"relative"}
            sx={{
              filter: 'brightness(0.6)'
            }}
          />
          <Link href={"oceania"}>
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              w={["90%","60%"]}
              position={"absolute"}
              as="a"
            >
              <Heading
                fontSize={["1.25rem", "3rem"]}
                color={"gray.50"}
                mb={"1rem"}
              >
                Oceania
              </Heading>
              <Text
                fontSize={["0.875rem", "1.5rem"]}
                color={"gray.100"}
                fontWeight={"bold"}
              >
                Composto por mais de mil ilhas
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex >
  )
}
import { Divider, Flex, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Categories from '../components/Categories'

import Logo from '../components/Logo'
import Slider from '../components/Slider/Slider'
import Webdoor from '../components/Webdoor'

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <div>
      <Head>
        <title>World Trip | Home</title>
      </Head>

      <Logo />

      <Flex
        as="main"
        direction={"column"}
      >
        <Webdoor />
        <Categories />
        <Divider
          width={"90px"}
          height={["0","1px"]}
          mx={"auto"}
          mb={"3.25rem"}
        />
        <Slider />
      </Flex>
    </div>
  )
}

export default Home
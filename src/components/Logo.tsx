import { Flex } from '@chakra-ui/react';


export default function Logo() {
  return (
    <Flex
      as="header"
      justify={"center"}
      align={"center"}
      h={"6.25rem"}
    >
      <img src="/logo.png" alt="World Trip logo" />
    </Flex>
  )
}
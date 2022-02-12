import { Flex, Icon, IconButton, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi'

export default function Logo() {
  const router = useRouter();

  return (
    <Flex
      as="header"
      justify={"center"}
      align={"center"}
      h={["3.5rem","6.25rem"]}
      width={"100%"}
      position={"relative"}
    >
      {
        router.pathname !== '/' && (
          <IconButton
            display={"flex"}
            icon={<Icon as={FiChevronLeft} />}
            aria-label="Open navigation"
            fontSize={"24"}
            variant="unstyled"
            onClick={() => router.push("/")}
            position={"absolute"}
            left={"5%"}
          />
        )
      }
      <Image
        width={["5rem","11.75rem"]}
        src="/logo.png"
        alt="World Trip logo"
      />
    </Flex>
  )
}
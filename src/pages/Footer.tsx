import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  VisuallyHidden,
} from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { ReactNode } from 'react'

const Logo = (props: any) => {
  return (
    // <svg
    //   height={32}
    //   viewBox="0 0 120 28"
    //   xmlns="./favicon.ico"
    //   {...props}
    // ></svg>
    <Image src="kl small logo clear.png" w="8"></Image>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#880000', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text>© 2023 Kienan Leung CV. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label="LinkedIn"
            href="https://www.linkedin.com/in/kienan-leung"
          >
            <AiFillLinkedin />
          </SocialButton>
          <SocialButton label={'GitHub'} href="https://github.com/leungkienan">
            <AiFillGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}

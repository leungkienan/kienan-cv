import { Container, Stack, Heading, Text } from '@chakra-ui/react'

export default function Contact() {
  return (
    <Container maxW={'7xl'} px={'15%'} height="80vh">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              Contact Me
            </Text>
            <br />
          </Heading>
          <div>
            <Text color={'gray.500'}>Checkout my Socials</Text>
            <Text color={'gray.500'}>or Email me here: </Text>
          </div>
        </Stack>
      </Stack>
    </Container>
  )
}

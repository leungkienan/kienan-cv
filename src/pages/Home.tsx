import {
  Container,
  Center,
  Stack,
  Flex,
  Box,
  Heading,
  Link,
  Text,
  Image,
  Icon,
  IconButton,
  IconProps,
} from '@chakra-ui/react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export default function HomePage() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          margin={{ sm: 1, md: 5, lg: 20 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              m="auto"
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
              Hi There!
            </Text>
            <br />
          </Heading>
          <div>
            <Text justifyContent={'center'} color={'gray.900'}>
              My name is Kienan Leung, I am:
            </Text>
            <Text color={'gray.900'}>A 25 Year Old Fullstack Developer </Text>
            <Text color={'gray.900'}>
              Working as an Accountant at Redshift Ltd
            </Text>
          </div>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={'./kienan.jpg'}
            />
          </Box>
        </Flex>
      </Stack>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 14 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 10 }}
          margin={{ sm: 1, md: 5, lg: 20 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              m="auto"
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
              About me
            </Text>
            <br />
          </Heading>
          <div>
            <Text justifyContent={'center'} color={'gray.900'}>
              nothing
            </Text>
            <Text color={'gray.900'}>A 25 Year Old Fullstack Developer </Text>
            <Text color={'gray.900'}>
              Working as an Accountant at Redshift Ltd
            </Text>
          </div>
        </Stack>
      </Stack>
    </Container>
  )
}

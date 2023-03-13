import {
  Container,
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
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
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
            <Text color={'gray.900'}>My name is Kienan Leung, I am:</Text>
            <Text color={'gray.900'}>A 25 Year Old Fullstack Developer </Text>
            <Text color={'gray.900'}>
              Working as an Accountant at Redshift Ltd
            </Text>
            <Text color={'gray.900'}>Reach out to me here</Text>
            <Link href="https://github.com/leungkienan" isExternal>
              <Icon
                aria-label="Open GitHub"
                bg="none"
                boxSize={'10'}
                as={AiFillGithub}
              ></Icon>
            </Link>
            <Link href="https://www.linkedin.com/in/kienan-leung" isExternal>
              <Icon
                aria-label="Open LinkedIn"
                bg="none"
                boxSize={'10'}
                as={AiFillLinkedin}
              ></Icon>
            </Link>
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
    </Container>
  )
}

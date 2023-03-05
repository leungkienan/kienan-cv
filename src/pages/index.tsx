import Head from 'next/head'
import { Inter } from 'next/font/google'
import { AspectRatio, Container, Text } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Image,
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kienan Leung CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link id="nav-home">Kienan Leung</Link>
        <div>
          <Link className="navBar">About</Link>
          <Link className="navBar">Projects</Link>
          <Link className="navBar">Contact</Link>
        </div>
      </header>

      <Card width="60%" margin="10px auto" align="center">
        <CardHeader>
          <Heading size="2xl">This is me</Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Image
            src="/kienan.jpg"
            className="myself"
            alt="kienan"
            width="400px"
            boxSize={'200px'}
            borderRadius="full"
            fit="cover"
          />
          <br></br>
          <Text>Hi there!</Text>
        </CardBody>
      </Card>

      {/* <div className="main">
        <div className="main__content">
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image
              src="/kienan.jpg"
              className="myself"
              alt="kienan"
              width="100"
              height="100"
            />
          </AspectRatio>
          <div>
            <h1 className="desc">My name is Kienan</h1>
            <Center>
              <Text>I am a:</Text>
            </Center>
            <Center height="50px">
              <Text>Developer</Text>
              <Divider
                orientation="vertical"
                borderColor={'red'}
                margin={'5px'}
              />
              <Text>Accountant</Text>
            </Center>
          </div>
        </div>
      </div> */}
    </>
  )
}

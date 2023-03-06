import Head from 'next/head'
import NextLink from 'next/link'
import { Inter } from 'next/font/google'
import { Box, Link } from '@chakra-ui/react'
import { AspectRatio, Container, Text } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
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
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import HomePage from './Home'

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
      <HomePage />
      {/* <Container maxW="4xl">
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          margin="15px auto"
          align="left"
          // boxShadow={'0 1px 8px #a7a7a7'}
          border={'none'}
        >
          <CardHeader>
            <Heading size="4xl">Kienan Leung</Heading>
            <Heading size="2xl">Me:</Heading>
            <Heading size="2xl">Web Developer</Heading>
            <Heading size="2xl">An Accountant</Heading>
            <Heading size="2xl"></Heading>
          </CardHeader>
          <CardBody align={'right'}>
            <Image
              align="center"
              src="/kienan.jpg"
              alt="kienan"
              width="400"
              height="auto"
              boxSize={'350px'}
              borderRadius="full"
              fit="cover"
            />
          </CardBody>
        </Card>
      </Container> */}
    </>
  )
}

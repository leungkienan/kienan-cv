import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
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

import { InfoIcon } from '@chakra-ui/icons'

import { IconButton } from '@chakra-ui/react'

import Nav from './Nav'

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
      <Nav />
      <Card
        width="60%"
        margin="15px auto"
        align="center"
        boxShadow={'0 1px 8px #a7a7a7'}
      >
        <CardHeader>
          <Heading size="2xl" textAlign={'center'}>
            This is Kienan
          </Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Center>
            <Image
              align="center"
              src="/kienan.jpg"
              className="myself"
              alt="kienan"
              width="400px"
              height="auto"
              boxSize={'200px'}
              borderRadius="full"
              fit="cover"
            />
          </Center>
          <br></br>
          <Heading size="xl">Accountant & Web Developer</Heading>
          <br></br>
        </CardBody>
      </Card>
      <Card
        width="60%"
        margin="15px auto"
        align="center"
        boxShadow={'0 1px 8px #a7a7a7'}
      >
        <CardHeader>
          <Heading>About me</Heading>
        </CardHeader>
        <CardBody textAlign={'left'}>
          <UnorderedList>
            <ListItem>I love making things with funny words</ListItem>
            <ListItem>I sometimes take cool photos</ListItem>
          </UnorderedList>
        </CardBody>
      </Card>
    </>
  )
}

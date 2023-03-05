import Nav from './Nav'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

export default function Contact() {
  return (
    <>
      <Nav />
      <Card
        width="60%"
        margin="15px auto"
        align="center"
        boxShadow={'0 1px 8px #a7a7a7'}
      >
        <CardHeader>
          <Heading size="2xl">Contact</Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Text>You can reach out to me here!</Text>
        </CardBody>
      </Card>
    </>
  )
}

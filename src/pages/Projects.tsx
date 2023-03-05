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

export default function Projects() {
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
          <Heading size="2xl">Projects</Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Text>The projects</Text>
        </CardBody>
      </Card>
    </>
  )
}

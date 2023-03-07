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
  Container,
} from '@chakra-ui/react'

export default function Contact() {
  return (
    <>
      <Container maxW={'4xl'}>
        <Card
          overflow="hidden"
          variant="outline"
          margin="15px auto"
          align="left"
          border={'none'}
        >
          <CardHeader>
            <Heading size="2xl">Contact</Heading>
          </CardHeader>
          <CardBody textAlign="center">
            <Text>You can reach out to me here!</Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

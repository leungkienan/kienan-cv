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
          // direction={{ base: 'column', sm: 'row' }}
          overflow="hidden"
          variant="outline"
          margin="15px auto"
          align="left"
          // boxShadow={'0 1px 8px #a7a7a7'}
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

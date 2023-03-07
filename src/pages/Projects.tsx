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

export default function Projects() {
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
            <Heading size="2xl">Projects</Heading>
          </CardHeader>
          <CardBody textAlign="left">
            <Text>List starts here</Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

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

export default function Gallery() {
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
            <Heading size="2xl">Gallery</Heading>
          </CardHeader>
          <CardBody textAlign="left">
            <Text>Olympus XA</Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

import Nav from './Nav'
import { ReactNode } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Heading,
  Image,
  Text,
  Container,
} from '@chakra-ui/react'

const projectList = [
  { name: 'Cotiss Project', desc: 'hi', link: '' },
  { name: 'AniScraper', desc: 'sup', link: '' },
  { name: 'MangList', desc: 'this is a test', link: '' },
]

const Proj = ({ children }: { children: ReactNode }) => (
  <Box key={children} my="5">
    <Heading>{children.name}</Heading>
    <Text>{children.desc}</Text>
    <Text>{children.link}</Text>
  </Box>
)

export default function Projects() {
  return (
    <>
      <Container maxW={'4xl'} height="100vh">
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
            {projectList.map((stuff) => (
              <Proj>{stuff}</Proj>
            ))}
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

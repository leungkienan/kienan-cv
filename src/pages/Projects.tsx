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

const projectList = {
  aniScraper: {
    name: 'aniScraper',
    desc: 'A tool to download the anime you only want to see',
  },
  manglist: {
    name: 'MangList',
    desc: 'Update and track my manga chapters as I read them.',
  },
}

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
            <Heading size="0.5xl">{projectList.aniScraper.name}</Heading>
            <Text>{projectList.aniScraper.desc}</Text>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

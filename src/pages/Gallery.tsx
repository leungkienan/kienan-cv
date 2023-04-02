import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Center,
} from '@chakra-ui/react'
import { BsFillCameraFill } from 'react-icons/bs'

export default function Gallery() {
  const imgGallery = []
  for (let i = 0; i <= 8; i++) {
    imgGallery.push(i)
  }
  return (
    <Center>
      <Box p={4} height="100vh" maxW={'4xl'} margin="15px auto">
        <Heading alignItems="center" p="4" display="flex">
          <Icon p="1" as={BsFillCameraFill} alignItems="center"></Icon>
          <Heading size="2xl">Olympus XA</Heading>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          {imgGallery.map((fileName) => (
            <Image
              borderRadius={'10px'}
              // border={'solid'}
              key={fileName}
              src={'./gallery/' + fileName + '.jpg'}
              alt="ok"
              position={'relative'}
            ></Image>
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  )
}

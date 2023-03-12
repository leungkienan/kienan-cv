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
    <Box p={4}>
      <Heading alignItems="center" p="4" display="flex">
        <Center m="auto" p="5">
          <Icon p="1" as={BsFillCameraFill} alignItems="center"></Icon>
          <Text>Olympus XA</Text>
        </Center>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
        {imgGallery.map((fileName) => (
          <Image
            key={fileName}
            src={'./gallery/' + fileName + '.jpg'}
            alt="ok"
          ></Image>
        ))}
      </SimpleGrid>
    </Box>
  )
}

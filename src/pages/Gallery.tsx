import { ReactElement } from 'react'
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
} from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

interface FeatureProps {
  title: string
  icon: ReactElement
}
const galleryFolder = '../../public/gallery'

const Feature = ({ title, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={300}
        h={300}
        align={'center'}
        justify={'center'}
        color={'white'}
        borderRadius={'5px'}
        bg={'#fff'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
    </Stack>
  )
}

export default function Gallery() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
        />
      </SimpleGrid>
    </Box>
  )
}

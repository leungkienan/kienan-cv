import { ReactNode } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Center,
  Container,
  Button,
  useDisclosure,
  useColorModeValue,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = ['Projects', 'Gallery', 'Contact']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    color="white"
    fontWeight="bold"
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      bg: useColorModeValue('rgba(255, 255, 255, 0.1)', 'none'),
    }}
    href={'/' + children}
  >
    {children}
  </Link>
)

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('#880000', '#880000')} px="4">
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
          margin={'auto'}
          maxW={'6xl'}
        >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Button
                className="home"
                color="white"
                bg={'#880000'}
                fontWeight={'bold'}
                as={'a'}
                href="/"
                _hover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  textDecoration: 'underline',
                }}
              >
                <Image src="kl small logo clear.png" w="8"></Image>
                <Text ml="2">Kienan Leung</Text>
              </Button>
            </Box>
          </HStack>
          <Flex alignItems={'center'} mr={4}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Flex alignItems={'center'}>
                <Stack direction="row" spacing={'7'}>
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </Stack>
              </Flex>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

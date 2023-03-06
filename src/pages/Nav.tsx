import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { IconButton } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

export default function Nav() {
  return (
    <header>
      <Link as={NextLink} href="/" id="nav-home">
        <Image src="/favicon.ico"></Image>
      </Link>
      <div>
        <Link as={NextLink} href="/Gallery" className="navBar">
          Gallery
        </Link>
        <Link as={NextLink} href="/Projects" className="navBar">
          Projects
        </Link>
        <Link as={NextLink} href="/Contact" className="navBar">
          Contact
        </Link>
      </div>
    </header>
  )
}

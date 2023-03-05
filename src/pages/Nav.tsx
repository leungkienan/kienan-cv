import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Nav() {
  return (
    <header>
      <Link as={NextLink} href="/" id="nav-home">
        Kienan Leung
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

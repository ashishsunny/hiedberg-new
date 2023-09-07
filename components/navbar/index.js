import Image from 'next/image'
import logo from '../../public/assets/images/logo-blue-hiedberg.svg'
import { Inter } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import ButtonWrapper from '../button'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const comps = [
  {
    title: 'hideberg sub 1',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'hideberg sub 2',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'hideberg sub 3',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'hideberg sub 4',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Thideberg sub 5',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'hideberg sub 6',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export function Items() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Hideberg</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white'>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      hideberg
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Welocme to Hideberg landing
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white'>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <li>hideberg sub 1</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Remote Assistance</NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white'>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {comps.map((x) => {
                return <li>{x.title}</li>
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default function Navbar() {
  return (
    <nav className="bg-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-black text-lg font-bold ml-7">
          <Link href="/"><Image height="30" src={logo}></Image></Link>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          <Items />
        </div>

        {/* Button Section */}
        <div className="md:ml-4">
            <ButtonWrapper text="Sign Up"/>
        </div>
      </div>
    </nav>
  )
}

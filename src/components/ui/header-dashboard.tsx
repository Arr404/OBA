"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {useEffect, useState} from "react";
import MobileMenu from "@/components/ui/mobile-menu";
import MobileMenuDashboard from "@/components/ui/mobile-menu-dashboard";
import Logo from "@/components/ui/logo";
import {DataMenu, menuContentClass} from "@/components/dataConstant/contentMenu";

const dataMenu: menuContentClass[] = DataMenu

export default function HeaderDashboard() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-0">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
        {/* Desktop navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger><p className="truncate max-w-32 font-bold text-xl ">A. Matriks Capaian Pembelajaran, Indikator Kinerja, dan Perangkat Asesmen </p></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard"
                        >
                          {/*<Icons.logo className="h-6 w-6" />*/}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Bagian A
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Matriks Capaian Pembelajaran, Indikator Kinerja, dan Perangkat Asesmen
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {dataMenu.slice(0,3).map(((value, index, array)=>(
                        <ListItem href={value.link} title={`Tabel ${value.number}`}>
                          {value.title}
                        </ListItem>
                    )))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger><p className="truncate max-w-32 font-bold text-xl ">B. Daftar Nilai Mata Kuliah</p></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard"
                        >
                          {/*<Icons.logo className="h-6 w-6" />*/}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Bagian B
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Daftar Nilai Mata Kuliah
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {dataMenu.slice(3,4).map(((value, index, array)=>(
                        <ListItem href={value.link} title={`Tabel ${value.number}`}>
                          {value.title}
                        </ListItem>
                    )))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger><p className="truncate max-w-32 font-bold text-xl ">C. Evaluasi Nilai Tengah Semester </p></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard"
                        >
                          {/*<Icons.logo className="h-6 w-6" />*/}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Bagian C
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Evaluasi Nilai Tengah Semester
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {dataMenu.slice(4,10).map(((value, index, array)=>(
                        <ListItem href={value.link} title={`${value.number.slice(0,6) !== "Gambar"?"Tabel":""} ${value.number}`}>
                          {value.title}
                        </ListItem>
                    )))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger><p className="truncate max-w-32 font-bold text-xl ">D. Evaluasi Nilai Akhir Semester </p></NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/dashboard"
                        >
                          {/*<Icons.logo className="h-6 w-6" />*/}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Bagian D
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Evaluasi Nilai Akhir Semester
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {dataMenu.slice(11).map(((value, index, array)=>(
                        <ListItem href={value.link} title={`${value.number.slice(0,6) !== "Gambar"?"Tabel":""} ${value.number}`}>
                          {value.title}
                        </ListItem>
                    )))}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        <MobileMenuDashboard />

        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
      <li>
        <NavigationMenuLink asChild>
          <a
              ref={ref}
              className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className
              )}
              {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
  )
})
ListItem.displayName = "ListItem"

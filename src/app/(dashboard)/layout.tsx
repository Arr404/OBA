'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "@/components/ui/header";
import HeaderDashboard from "@/components/ui/header-dashboard";


export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <HeaderDashboard  />
      <main className="grow">

        {children}

      </main>

    </>
  )
}

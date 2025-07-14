import React from 'react'
import { TopBar, Navbar } from '@/components/layout/header';
import Footer from '@/components/layout/footer/Footer';

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='font-poppins'>
      <TopBar />
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default RootLayout
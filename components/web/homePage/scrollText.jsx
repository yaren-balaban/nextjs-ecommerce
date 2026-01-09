import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const ScrollText = () => {
  return (
    <Marquee
        autoFill={true}
        speed={50}
        pauseOnHover={true}
        className='w-full flex bg-blue-900 text-yellow-300 py-2'
      >
        <div className='flex gap-5 me-5'>
            <Link href={"#"}>ONLINE ÖZEL FIRSATLARI KAÇIRMA!</Link>
             <Link href={"#"}>2026’YA 2025 FİYATLARIYLA GİRİYORUZ, ZAM YOK!</Link>
        </div>
    </Marquee>
  )
}

export default ScrollText

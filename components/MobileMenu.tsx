'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Image src="/menu.svg" alt="" width={32} height={32} />
      </button>

      {open && (
        <ul className="absolute left-0 top-full z-40 flex w-full flex-col gap-5 bg-white px-6 py-6 shadow-md">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="regular-16 text-gray-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="regular-16 font-bold text-green-50"
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default MobileMenu
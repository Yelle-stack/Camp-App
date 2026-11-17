'use client'

import { useState } from 'react'
import Button from '@/components/Button'

export default function LoginPage() {
  const [sent, setSent] = useState(false)

  return (
    <section className="max-container padding-container flexCenter py-20">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setSent(true)
        }}
        className="flex w-full max-w-[420px] flex-col gap-5 rounded-3xl border border-gray-10 bg-white p-8 shadow-md"
      >
        <h1 className="bold-32">Login</h1>

        <label className="regular-16 flex flex-col gap-2 text-gray-50">
          Email
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-full border border-gray-20 px-5 py-3 text-gray-90 outline-none focus:border-green-50"
          />
        </label>

        <label className="regular-16 flex flex-col gap-2 text-gray-50">
          Password
          <input
            type="password"
            required
            placeholder="••••••••"
            className="rounded-full border border-gray-20 px-5 py-3 text-gray-90 outline-none focus:border-green-50"
          />
        </label>

        <Button type="submit" title="Login" variant="btn_green" full />

        {sent && (
          <p className="regular-14 text-center text-gray-30">
            Demo only: accounts are not available yet.
          </p>
        )}
      </form>
    </section>
  )
}
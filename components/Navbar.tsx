import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:text-green-50"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          href="/login"
        />
      </div>

      <MobileMenu />
    </nav>
  )
}

export default Navbar

import { useContext } from 'react';
import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { ThemeContext } from "@/app/layout"

const Header = () => {
  const theme = useContext(ThemeContext);
  const textColor = theme === 'dark' ? 'text-white' : 'text-primary'

  return (
    <header className={`py-8 xl:py-12 ${textColor}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className={`text-4xl font-semibold ${textColor}`}>Kate <span className="text-accent">.</span></h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

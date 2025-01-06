import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Resume from '../components/Resume'
import AboutMe from '../components/AboutMe'
import Experiences from '../components/Experiences'
import CTF from '../components/ctf'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-card text-card-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-primary">
            <Link href="/">
              <span className="cursor-pointer hover:text-primary-foreground">William McCoy</span>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-card-foreground focus:outline-none">
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
          <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}> 
            <li>
              <a href="#about" className="hover:text-primary-foreground">About Me</a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-primary-foreground">Certifications</a>
            </li>
            <li>
              <a href="#ctf" className="hover:text-primary-foreground">CTF's</a>
            </li>
            <li>
              <a href="#experiences" className="hover:text-primary-foreground">Experiences</a>
            </li>
            <li>
              <a href="#resume" className="hover:text-primary-foreground">Resume</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-primary-foreground">Projects</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">William McCoy</h1>
          <div id="about">
            <AboutMe />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="ctf">
            <CTF />
          </div>
          <div className="space-y-4 mt-4"></div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="resume">
            <Resume />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
      </main>
    </>
  )
}

'use client'

import Image from 'next/image'

const projects = [
  { id: 1, title: "WinSP", description: "A Windows security program developed in PowerShell that monitors services and detects background modifications of these Windows Services", image: "/WinSP_logo.png", url: "https://winsp.vercel.app/" },
  { id: 2, title: "GPBundles", description: "An e-commerce website for gaming accessories and peripherals, developed for IT310(E-Commerce)", image: "/GP.png", url: "https://wam328.wixsite.com/gpbundles" },
  { id: 3, title: "Willy's Fruits", description: "A fruit stand website that simulates the advertisement and sales of fruit in order to demonstrate basic HTML, CSS, PHP and JavaScript Knowledge, developed for IT202(Intro Web Dev)", image: "/WF.png", url: "https://web.njit.edu/~wam32/SemesterProject/home.php" },
]

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-primary text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a href={project.url} key={project.id} target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} width={1000} height={200} className="w-full h-48 object-fill" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

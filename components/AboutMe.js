import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function AboutMe() {
  return (
    <section className="mb-12 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 text-primary">About Me</h2>
      <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-primary">
        <Image
          src="/headshott.jpg"
          alt="Profile Picture"
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-3xl mx-auto">
          {[
            { icon: Github, href: 'https://github.com/WillMcX', label: 'Github' },
            { icon: Instagram, href: 'https://www.instagram.com/will.e_mc/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D', label: 'Instagram' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/william-mccoy-3027a7282', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:wmccoy104609@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+12019522193', label: 'Phone' },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-card rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <item.icon className="w-8 h-8 mb-2" />
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="space-y-6 mt-4"></div>
      <div className="max-w-2xl text-center">
        <p className="text-lg text-muted-foreground">
          Hello, My name is William McCoy. I am currently an NJIT student pursuing a 4 year Bachelors degree, and possibly a 2 year Masters, in Information Technology with a specialization in Cybersecurity.

          As a child, I have always had an interest in all things computers, from games to coding to just generally how they all work. My main objective for the future is to take my love of computers and security and make a meaningful contribution to society.
          
        </p>
      </div>

    </section>
  )
}

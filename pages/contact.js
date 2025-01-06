import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">Get in Touch</h1>
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary">
            <Image
              src="/headshott.jpg"
              alt="Profile Picture"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-primary">William McCoy</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
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
      </div>
    </main>
  )
}
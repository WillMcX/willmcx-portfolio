'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const certifications = [
  {
    id: 1,
    title: "Certified In Cybersecurity",
    issuer: "ISC2",
    image: "/CCCert.png",
    pdf: "/CCCert.pdf"
  },
  // {
  //   id: 2,
  //   title: "Advanced Manufacturing Technologies",
  //   issuer: "TechPro Academy",
  //   image: "/cert_thumbnails/Manufacturing_thumbnail.jpg",
  //   pdf: "/Manufacturing_Cert.pdf"
  // },
  // {
  //   id: 3,
  //   title: "Cybersecurity for Industrial Systems",
  //   issuer: "CyberSafe Institute",
  //   image: "/cert_thumbnails/Cyber_thumbnail.jpg",
  //   pdf: "/Cybersecurity_Cert.pdf"
  // },
]

export default function Certifications() {
  const [current, setCurrent] = useState(0)
  const length = certifications.length
  const autoRotateTime = 5000

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, autoRotateTime)

    return () => clearInterval(interval)
  }, [current]) 

  if (!Array.isArray(certifications) || certifications.length <= 0) {
    return null
  }

  return (
    <section className="mb-12 relative">
      <h2 className="text-3xl font-semibold mb-4 text-primary text-center">Certifications</h2>
      <div className="relative overflow-hidden max-w-3xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`transition-transform duration-700 ease-in-out ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {index === current && (
              <Link href={cert.pdf} target="_blank" rel="noopener noreferrer">
                <div className="bg-card text-card-foreground rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-64 relative">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} Thumbnail`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">Issued by: {cert.issuer}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}

      
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl z-10 bg-primary text-white px-3 py-1 rounded-full hover:bg-opacity-80"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl z-10 bg-primary text-white px-3 py-1 rounded-full hover:bg-opacity-80"
        >
          ❯
        </button>

        
        <div className="flex justify-center mt-4">
          {certifications.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 mx-2 rounded-full cursor-pointer ${
                index === current ? 'bg-primary' : 'bg-gray-400'
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

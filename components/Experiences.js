import Image from 'next/image'

const experiences = [
  {
    id: 1,
    company: "Absolutely Fish Inc.",
    position: "Aquarist / Stocks Manager",
    period: "July 2020 - March 2022",
    description: "Assisted customers to find habitable fish for their specific aquariums",
    desc2: "Headed inventory and management of dry good placement to ensure adequate supplies for sale",
    desc3: "Ordering and receiving of dry good orders",
    image: "/abfish.png"
  },
  {
    id: 2,
    company: "Shoprite",
    position: "Front-End Manager",
    period: "March 2022 - January 2023",
    description: "Supervised cashiers in their daily tasks in order to ensure company profits and loss prevention.",
    desc2: "Controlled sales of age restricted items (Alcohol, Cigarettes, etc.)",
    desc3: "Oversaw customer satisfaction in situational dilemma's or store discrepancies",
    image: "/shoprite.png"
  },
  {
    id: 3,
    company: "Barrow House",
    position: "Bartender / Barback",
    period: "March 2023 - January 2024",
    description: "Provided exceptional customer service by crafting high-quality cocktails and beverages, maintaining a friendly and welcoming environment, and efficiently handling high-volume orders.",
    desc2: "Managed bar operations including inventory control and restocking supplies.",
    desc3: "Supported team efficiency by assisting in bar setup and breakdown and maintaining cleanliness",
    image: "/barrow.png"
  },
  {
    id: 4,
    company: "TheCoderSchool Montclair",
    position: "Code Coach",
    period: "August 2023 - Present",
    description: "Creating lessons that are fun and engaging to younger audiences to keep them interested in learning.",
    desc2: "Teaching various coding languages and platforms such as Scratch, Python, JavaScript, and more",
    //desc3: "Ordering and receiving of dry good orders",
    image: "/coder.png"
  },
  {
    id: 5,
    company: "Clifton High School",
    position: "Substitute Teacher",
    period: "December 2023 - Present",
    description: "Delivered engaging and effective instruction by following lesson plans, adapting to diverse classroom environments, and managing student behavior to ensure continuity in learning.",
    desc2: "Maintained classroom order and productivity by implementing school policies, fostering a positive learning atmosphere, and providing individualized support to students as needed.",
    //desc3: "Ordering and receiving of dry good orders",
    image: "/cps.png"
  },
  {
    id: 6,
    company: "NJIT",
    position: "TA (IT201)",
    period: "February 2024 - Present",
    description: "Guided students in mastering Unity development by providing hands-on support with project creation, debugging, and implementing core design principles to enhance interactive experiences.",
    desc2: "Facilitated learning and comprehension by breaking down complex game design techniques, offering personalized feedback, and conducting office hours for additonal help.",
    //desc3: "Ordering and receiving of dry good orders",
    image: "/njit.jpeg"
  },
]

export default function Experiences() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-primary text-center">Experiences</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-card text-card-foreground p-6 rounded-lg shadow-md flex items-start">
            <div className="mr-4 flex-shrink-0">
              <Image
                src={exp.image}
                alt={exp.company}
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <h4 className="text-lg text-primary">{exp.company}</h4>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <p className="text-muted-foreground mt-2">{exp.description}</p>
              <p className="text-muted-foreground mt-2">{exp.desc2}</p>
              <p className="text-muted-foreground mt-2">{exp.desc3}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

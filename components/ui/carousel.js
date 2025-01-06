export function Carousel({ children }) {
    return (
      <div className="flex overflow-x-auto space-x-4">
        {children}
      </div>
    )
  }
  
  export function CarouselItem({ children }) {
    return <div className="min-w-[300px]">{children}</div>
  }
  
  export function CarouselNext() {
    return <button className="p-2 bg-primary rounded-full">Next</button>
  }
  
  export function CarouselPrevious() {
    return <button className="p-2 bg-primary rounded-full">Previous</button>
  }
  
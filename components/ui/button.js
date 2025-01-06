export function Button({ children }) {
    return (
      <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition">
        {children}
      </button>
    )
  }
  
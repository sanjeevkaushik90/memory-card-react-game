import { useState } from "react"

export default function MemoryGame() {
  const [card, setcard] = useState([])
  const [flip, setunflip] = useState([])
  const [match, setunmatch] = useState([])
  const [grid, setgrid] = useState(4)

  return (
    <div className="bg-[#1f1f1f] w-full h-screen flex flex-col items-center pt-30">
      {/* heading */}
      <div className="mb-8">
        <h1 className="text-white text-5xl font-extrabold">
          Memory Game
        </h1>
      </div>

      {/* game controls and info section */}
      <div className="mb-8 flex gap-50">
        {/* score display */}
        <div className="text-white text-xl mb-4">
          Score: <span className="font-bold">0</span>
        </div>

        {/* moves counter */}
        <div className="text-white text-xl mb-4">
          Moves: <span className="font-bold">0</span>
        </div>


      </div>

      {/* grid configuration input */}

      <div className="mb-8 text-white flex gap-6">
        <h6>Select Grid size:</h6>
        <input type="number" className="border border-solid rounded-md" placeholder="e.g. 4" />
      </div>

      {/* game grid */}
      <div className="mb-8">
        {/* cards will go here */}
      </div>

      {/* game controls */}
      <div className="mb-8">
        {/* restart button */}
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Restart Game
        </button>

        {/* additional buttons can go here */}
      </div>

      {/* game status message */}
      <div>
        {/* win/lose messages */}
      </div>
    </div>
  )
}




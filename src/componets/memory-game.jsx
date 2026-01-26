import { useState } from "react"

export default function MemoryGame() {

  const [GridSize, setGrideSize] = useState(4)

  function gridelen(){
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold ">
            Memory Game
          </h1>
          <p className="mt-2 text-slate-400">

          </p>
        </div>

        {/* Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-300">
            Grid Size
          </label>

          <input
            type="number"
            min={2}
            max={8}
            placeholder="e.g. 4"
            className="
          w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2
          text-slate-100 placeholder-slate-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500
        "
        value={GridSize}
          />

          <p className="text-xs text-slate-500">
            Grid size must be an even number
          </p>
        </div>


        {/* Grid */}
        <div className="p-10 flex flex-col text-white border-white">
          <div className="">

          </div>
        </div>

        {/* Action */}
        <button
          className="
        mt-6 w-full rounded-lg bg-indigo-600 py-2 font-semibold
        hover:bg-indigo-500 active:scale-[0.98]
        transition
        text-xl
      "
        >
          Restart Game
        </button>

      </div>
    </div>

  )
}

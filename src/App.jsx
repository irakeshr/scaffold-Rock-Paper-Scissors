import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("hello world the World");
  
   

  return (
    <>
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center py-10 sm:py-12 md:py-16">
          <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 gap-8 md:gap-12">
            {/* Headline */}
            <h1 className="text-text-dark dark:text-text-light tracking-tight text-4xl sm:text-5xl font-bold leading-tight text-center">
              ROCK, PAPER, SCISSORS
            </h1>
            {/* Scoreboard */}
            <div className="flex flex-wrap gap-4 p-4 justify-center">
              <div className="flex min-w-[180px] flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/20 text-center">
                <p className="text-text-dark dark:text-text-light text-lg font-medium leading-normal">
                  Player
                </p>
                <p className="text-primary tracking-light text-4xl font-bold leading-tight">
                  0
                </p>
              </div>
              <div className="flex min-w-[180px] flex-1 flex-col gap-2 rounded-xl p-6 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-black/20 text-center">
                <p className="text-text-dark dark:text-text-light text-lg font-medium leading-normal">
                  Computer
                </p>
                <p className="text-secondary-accent tracking-light text-4xl font-bold leading-tight">
                  0
                </p>
              </div>
            </div>
            {/* Selection Display Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl border-4 border-primary/50 bg-gray-200 dark:bg-gray-800/50 flex items-center justify-center"
                  data-alt="Player's choice display area, showing a placeholder"
                >
                  <span className="material-symbols-outlined text-7xl text-gray-400 dark:text-gray-600">
                    question_mark
                  </span>
                </div>
                <div>
                  <p className="text-text-dark dark:text-text-light text-lg font-bold leading-normal text-center">
                    You Picked
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal text-center">
                    ...
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl border-4 border-secondary-accent/50 bg-gray-200 dark:bg-gray-800/50 flex items-center justify-center"
                  data-alt="Computer's choice display area, showing a placeholder"
                >
                  <span className="material-symbols-outlined text-7xl text-gray-400 dark:text-gray-600">
                    question_mark
                  </span>
                </div>
                <div>
                  <p className="text-text-dark dark:text-text-light text-lg font-bold leading-normal text-center">
                    The Computer Picked
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal text-center">
                    ...
                  </p>
                </div>
              </div>
            </div>
            {/* Result Display */}
            <div className="flex flex-col items-center justify-center p-4 min-h-[100px]">
              {/* Example of a Win State */}
              {/* <h2 className="text-win text-3xl font-bold tracking-tight">You Win!</h2> */}
              {/* Example of a Lose State */}
              {/* <h2 className="text-lose text-3xl font-bold tracking-tight">You Lose!</h2> */}
              {/* Example of a Tie State */}
              {/* <h2 className="text-tie text-3xl font-bold tracking-tight">It's a Tie!</h2> */}
              {/* Default Instructional Text */}
              <h2 className="text-text-dark dark:text-text-light text-2xl md:text-3xl font-bold leading-tight tracking-tight text-center">
                Make your move
              </h2>
            </div>
            {/* Choice Buttons */}
            <div className="flex justify-center">
              <div className="flex flex-col sm:flex-row flex-1 gap-4 flex-wrap px-4 py-3 max-w-2xl justify-center">
                <button className="flex min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-20 px-5 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] grow flex-col gap-1 transition-transform hover:scale-105 active:scale-95">
                  <span className="material-symbols-outlined !text-4xl">
                    rocket
                  </span>
                  <span className="truncate">Rock</span>
                </button>
                <button className="flex min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-20 px-5 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] grow flex-col gap-1 transition-transform hover:scale-105 active:scale-95">
                  <span className="material-symbols-outlined !text-4xl">
                    description
                  </span>
                  <span className="truncate">Paper</span>
                </button>
                <button className="flex min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-20 px-5 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] grow flex-col gap-1 transition-transform hover:scale-105 active:scale-95">
                  <span className="material-symbols-outlined !text-4xl">
                    content_cut
                  </span>
                  <span className="truncate">Scissors</span>
                </button>
              </div>
            </div>
            {/* Reset Button Area (could be shown conditionally) */}
            <div className="flex justify-center p-4">
              <button className="flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-gray-500/50 dark:bg-gray-700/80 text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-500/70 dark:hover:bg-gray-700 transition-colors">
                <span className="truncate">Play Again</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
       
    </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

function makeConfetti(){
      confetti()
}

const btn = document.getElemetById("btn")

btn.addEventListener("click", makeConfetti)


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

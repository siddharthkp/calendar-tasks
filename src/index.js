import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

window.setTimeout(() => {
  const selector = '.kYrwHb'
  const tasks = document.querySelector(selector)

  const app = document.createElement('div')

  app.id = 'maker-root'
  app.style.width = '100%'

  if (tasks) {
    tasks.innerHTML = ''
    tasks.append(app)
  }

  ReactDOM.render(<App />, document.getElementById('maker-root'))
}, 2000)

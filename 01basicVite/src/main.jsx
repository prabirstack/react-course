import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp(){
  return (
    <div>
      <h1>Custom react app</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  
    <MyAppApp />
)

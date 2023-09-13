import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx' //importanto desta forma pois estou exportando essa função utilizando apenas o export
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

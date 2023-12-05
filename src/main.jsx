import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import './css/Layout.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="topBar">
      <Navbar />
    </div>
    <div className="mainScreen">
      <App />
    </div>
  </React.StrictMode>,
)

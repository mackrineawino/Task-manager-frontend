import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
//import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
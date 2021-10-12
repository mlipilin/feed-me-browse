import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

window.renderBrowse = (containerId, history) => {
  console.log('renderBrowse', { containerId, history })
  ReactDOM.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
    document.getElementById(containerId)
  )
  reportWebVitals()
}

window.unmountBrowse = (containerId) => {
  console.log('unmountBrowse', { containerId })
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {CountryContextProvider as Provider} from './Context'
ReactDOM.render(<Provider><App/></Provider> , document.getElementById('root'))
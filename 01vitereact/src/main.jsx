import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myApp(){
    return (
        <div>
            <h1>Hello Kaushik Once again</h1>
        </div>
    )
}

const anotherElement = (
    <a href = "https://google.com" target = '_blank'>Visit Google </a>
)

const reactElement = React.createElement(
    'a',
    {href :'https://google.com',target :'_blank'},
    'click me to visit google'
)
createRoot(document.getElementById('root')).render(
// myApp() => this would also work fine 
//<myApp/>
// anotherElement
// reactElement
    <App />

)

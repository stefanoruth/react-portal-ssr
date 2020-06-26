import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './App'
import { prepareClientPortals } from '@stefanoruth/react-portal-ssr'
import { BrowserRouter } from 'react-router-dom'

setTimeout(() => {
    prepareClientPortals()
}, 0)

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app'),
    () => {
        console.log('Hydrate')
    }
)

import React from 'react'
import { hydrate } from 'react-dom'
import { App } from './App'
import { prepareClientPortals } from '@stefanoruth/react-portal-ssr'

prepareClientPortals()

hydrate(<App />, document.getElementById('app'), () => {
    console.log('Hydrate')
})

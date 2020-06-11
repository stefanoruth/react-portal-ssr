import React from 'react'
import { Portal } from '@stefanoruth/react-portal-ssr'

export const App: React.FunctionComponent = props => {
    const [data, setData] = React.useState('Loading')

    React.useEffect(() => {
        setData('Loaded')
    }, [])

    return (
        <div>
            <div>{data}</div>
            <Portal>
                <div>Hej</div>
            </Portal>
        </div>
    )
}

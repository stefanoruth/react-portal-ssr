import React from 'react'
import { Portal } from '@stefanoruth/react-portal-ssr'

export const Page2: React.FunctionComponent = props => {
    const [data, setData] = React.useState('Loading Page2')

    React.useEffect(() => {
        setData('Loaded Page2')
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

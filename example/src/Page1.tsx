import React from 'react'
import { Portal } from '@stefanoruth/react-portal-ssr'
import { useLocation, Redirect } from 'react-router-dom'

export const Page1: React.FunctionComponent = props => {
    const [data, setData] = React.useState('Loading Page1')
    const location = useLocation()

    React.useEffect(() => {
        setData('Loaded Page1')
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

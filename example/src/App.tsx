import React from 'react'

export const App: React.FunctionComponent = props => {
	const [data, setData] = React.useState('Loading')

	React.useEffect(() => {
		setData('Loaded')
	}, [])

	return <div>{data}</div>
}

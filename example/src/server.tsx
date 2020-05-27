import React from 'react'
import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { App } from './App'

const PORT = 3000
const app = express()

app.use(express.static(path.join(__dirname, '../dist/public')))

app.use((req: Request, res: Response, next: NextFunction) => {
	const content = renderToString(<App />)

	return res.send(
		'<!DOCTYPE html>' +
			renderToStaticMarkup(
				<html lang="en">
					<head>
						<meta charSet="UTF-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<title>React Portal SSR</title>
					</head>
					<body>
						<div id="app" dangerouslySetInnerHTML={{ __html: content }} />
						<div id="portal" />
						<script src="/main.js" />
					</body>
				</html>
			)
	)
})

app.listen(PORT, () => {
	console.log(`SSR running on port ${PORT}`)
})

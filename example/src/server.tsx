import React from 'react'
import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import fs from 'fs'
import { App } from './App'

import { renderToString, renderToStaticMarkup } from 'react-dom/server'

const PORT = 3000
const app = express()

app.use((req: Request, res: Response, next: NextFunction) => {
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
						<div id="app">{renderToString(<App />)}</div>
					</body>
				</html>
			)
	)
})

app.listen(PORT, () => {
	console.log(`SSR running on port ${PORT}`)
})

import * as React from 'react'
import { load } from 'cheerio'
import { renderToString } from 'react-dom/server'
import { PortalChildren, PortalContext } from './Context'

export class PortalServer {
	protected portals: PortalChildren[] = []

	collectPortals(children: React.ReactNode) {
		return <PortalContext.Provider value={this.portals}>{children}</PortalContext.Provider>
	}

	appendPortals(html: string) {
		if (!this.portals.length) {
			return html
		}

		const dom = load(html)

		// Filter out dublicate, no ideer why there is at the moment.
		const result: PortalChildren[] = []
		const map = new Map()
		for (const item of this.portals) {
			if (!map.has(JSON.stringify(item.content))) {
				map.set(JSON.stringify(item.content), true)
				result.push({
					content: item.content,
					selector: item.selector,
				})
			}
		}

		result.forEach(({ content, selector }) => {
			dom(renderToString(content))
				.attr('data-react-universal-portal', '')
				.appendTo(selector as any)
		})

		this.portals.length = 0
		return dom.html()
	}
}

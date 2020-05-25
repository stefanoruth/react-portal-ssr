import * as React from 'react'
import { createPortal } from 'react-dom'
import { PortalContext, PortalChildren } from './Context'

export const Portal: React.FunctionComponent<{ selector?: string }> = ({ children, selector }) => (
	<PortalContext.Consumer>
		{(portals: PortalChildren[]) => {
			if (!selector) {
				selector = '#portal'
			}

			if (typeof window === 'undefined') {
				portals.push({ content: children, selector })

				return null
			}

			const element = document.querySelector(selector)

			if (!element) {
				throw new Error(`Dom is missing element with id of "${selector}"`)
			}

			return createPortal(children, element)
		}}
	</PortalContext.Consumer>
)

export function prepareClientPortals() {
	if (typeof window !== 'undefined') {
		Array.prototype.slice.call(document.querySelectorAll('[data-react-universal-portal]')).forEach((node: Element) => {
			node.remove()
		})
	}
}

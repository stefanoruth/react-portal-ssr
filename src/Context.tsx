import * as React from 'react'

export type PortalChildren = {
	selector: string
	content: any
}

export const PortalContext = React.createContext<PortalChildren[]>([])
PortalContext.displayName = 'PortalContext'

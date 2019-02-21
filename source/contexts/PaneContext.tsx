import * as React from 'react'

interface PaneContext {
	// TODO - tohle bude context ktery dostane tab ke komunikaci s platformou
}

export const PaneContext = React.createContext<PaneContext | null>(null)

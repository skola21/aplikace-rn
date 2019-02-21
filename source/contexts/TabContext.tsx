import * as React from 'react'

interface TabContext {
	// TODO - tohle bude context ktery dostane tab ke komunikaci s platformou
}

export const TabContext = React.createContext<TabContext | null>(null)

import * as React from 'react'

import { theme, Theme } from './themes/light'
import * as strings from './strings/czech.json'

interface AppContext {
	theme: Theme
	strings: { [key: string]: string }
}

export const AppContext = React.createContext<AppContext | null>(null)

export const App: React.FunctionComponent = () => {
	return <AppContext.Provider value={{ theme, strings }}>Ahoj</AppContext.Provider>
}

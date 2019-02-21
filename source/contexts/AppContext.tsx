import * as React from 'react'

import { Theme } from '../themes/light'

interface AppContext {
	theme: Theme
	strings: { [key: string]: string }
}

export const AppContext = React.createContext<AppContext | null>(null)

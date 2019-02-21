import * as React from 'react'

import { AppContext } from './contexts/AppContext';
import { theme } from './themes/light'

import * as strings from './strings/czech.json'

export const App: React.FunctionComponent = () => {
	return <AppContext.Provider value={{ theme, strings }}>Ahoj</AppContext.Provider>
}

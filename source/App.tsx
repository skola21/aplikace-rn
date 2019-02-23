import * as React from 'react'
import { View } from 'react-native'

import { AppContext } from './contexts/AppContext'
import { theme } from './themes/light'

import * as strings from './strings/czech.json'

import { Frame } from './components/frame/Frame'

export const App: React.FunctionComponent = () => {
	return (
		<AppContext.Provider value={{ theme, strings }}>
			<Frame content={<View />} rightPaneContent={<View />} />
		</AppContext.Provider>
	)
}

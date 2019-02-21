import * as React from 'react'

import { AppContext } from '../App'

export const useAppContext = () => {
    const appContext = React.useContext(AppContext)
    
	if (appContext == null) {
		throw Error('useAppContext: Please provide AppContext value.') // TODO zpracovat tenhle problemotvoric (e.g. vytvorit nekde nahore proper exception handling)
    }
    
	return appContext
}

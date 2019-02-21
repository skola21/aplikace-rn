import * as React from 'react'

export function createUseContext<T>(context: React.Context<T>, allowNull: boolean = false) {
    return () => {
        const value = React.useContext(context)
        
        if (!allowNull && value == null) {
            throw Error('Context value must not be null')
        }
        
        return value
    }
}

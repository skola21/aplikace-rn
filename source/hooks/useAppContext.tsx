import * as React from 'react'

import { createUseContext } from '../utils'

import { AppContext } from '../contexts/AppContext'

export const useAppContext = createUseContext(AppContext)

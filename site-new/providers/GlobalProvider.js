import { createContext, useContext } from 'react'

const globalContext = createContext(null)

export default globalContext

export const useGlobalContext = () => useContext(globalContext)

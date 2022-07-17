import { createContext, useContext } from 'react'

const notionContext = createContext(null)

export default notionContext

export const useNotionContext = () => useContext(notionContext)

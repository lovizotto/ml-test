import React from 'react'

export const AppContext = React.createContext({})

const ContextProvider = (props) => <AppContext.Provider {...props} />
export default ContextProvider
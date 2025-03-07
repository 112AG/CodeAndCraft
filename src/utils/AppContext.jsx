import React, { createContext, useState } from 'react'

export const AppContext = createContext();

function AppContextProvider({children}) {
      const [menuOpen, setMenuOpen] = useState(false);

      const value = {
        menuOpen,
        setMenuOpen,
        }
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
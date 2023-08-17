import { useContext, useState, createContext } from 'react'

const NavContext = createContext()

const NavProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('/')

  return (
    <NavContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavContext.Provider>
  )
}

const useNav = () => {
  return useContext(NavContext)
}

export { NavProvider, useNav }
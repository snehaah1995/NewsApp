import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Newsboard from './components/Newsboard'

const App = () => {

  const [category, setCategory] = useState("general")
  const [theme, setTheme] = useState("light")
  
  const toggleTheme = () => {
    setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>  
      <Navbar setCategory={setCategory} toggleTheme={toggleTheme} theme={theme}  />
      <Newsboard category={category} />
    </div>
  )
}

export default App
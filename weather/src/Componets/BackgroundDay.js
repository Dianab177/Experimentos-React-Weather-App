import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'



const BackgroundDay = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('data-theme') === 'dark' ? true : false)
 /*let swichtbackground = document.querySelector('#weather');*/
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light'

    setIsDarkMode(newColorScheme === 'dark' ? true : false)
    localStorage.setItem('data-theme', newColorScheme)
    document.body.setAttribute('data-theme', localStorage.getItem('data-theme'))
    /*swichtbackground.setAttribute('data-theme', localStorage.getItem('data-theme'))*/
  })

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode) {
      localStorage.setItem('data-theme', 'dark')
      document.body.setAttribute('data-theme', 'dark')
      /*swichtbackground.setAttribute('data-theme', 'dark')*/
    } else {
      localStorage.setItem('data-theme', 'light')
      document.body.setAttribute('data-theme', 'light')
      /*swichtbackground.setAttribute('data-theme', 'light')*/
    }
  }

  return (
    <div className="App">
      <div className="swichtDay">
        <DayNightToggle size={30} onChange={handleChangeTheme} checked={isDarkMode} />
      </div>
    </div>
  )
}

export default BackgroundDay
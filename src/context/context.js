import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const GlobalDataContext = React.createContext()

const GlobalDataProvider = ({ children }) => {
  const [data, setData] = useState('')
  const [theme, setTheme] = useState(true)
  const [total, setTotal] = useState(0)
  const [filter, setFilter] = useState('')

  const changeTheme = () => {
      setTheme(!theme)
  }


  const fetchData = async () => {
    try {
      const {data} = await axios.get('https://cybernet.az/demo.php')
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <GlobalDataContext.Provider
      value={{ data,theme, changeTheme, total, setTotal, filter, setFilter }}
    >
      {children}
    </GlobalDataContext.Provider>
  )
}

export const useGlobalDataContext = () => {
  return useContext(GlobalDataContext)
}

export { GlobalDataProvider }
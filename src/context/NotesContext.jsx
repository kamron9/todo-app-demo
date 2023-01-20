import { createContext, useContext, useEffect, useState } from 'react'
import MainService from '../service/mainService'

export const NotesContext = createContext()
export const useNotes = () => useContext(NotesContext)
const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [fullfilled, setFullfilled] = useState(false)
  useEffect(() => {
    getAll()
  }, [])
  const getAll = async () => {
    try {
      let result = await MainService.getAll()
      return setData(result?.data)
    } catch (e) {
      throw e
    }
  }
  const saveNotes = (newData) => {
    const formData = new FormData()
    formData.append('title', newData.title)
    formData.append('description', newData.description)
    formData.append('image', newData.image)
    const findId = data.find((lists) => lists.id === newData.id)
    if (findId) {
      MainService.update(newData.id, formData) && setFullfilled(true)
    } else MainService.create(formData) && setFullfilled(true)
  }
  const onDelete = (id) => {
    const newList = data.filter((items) => items.id !== id)
    setData(newList)
    MainService.delete(id)
  }
  return (
    <NotesContext.Provider
      value={{ data, setData, saveNotes, onDelete, fullfilled,setFullfilled }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export default NotesContextProvider

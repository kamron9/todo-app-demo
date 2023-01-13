import { createContext, useContext, useEffect, useState } from 'react'
import MainService from '../service/mainService'

export const NotesContext = createContext()
export const useNotes = () => useContext(NotesContext)
const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   url: 'https://bit.ly/dan-abramov',
    //   title: 'notes title-1',
    //   desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    // },
    // {
    //   id: 2,
    //   url: 'https://bit.ly/dan-abramov',
    //   title: 'notes title-2',
    //   desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    // },
    // {
    //   id: 3,
    //   url: 'https://bit.ly/dan-abramov',
    //   title: 'notes title-3',
    //   desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    // },
  ])
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
    const findId = data.find((lists) => lists.id === newData.id)
    if (findId) {
      MainService.update(newData.id, {
        title: newData.title,
        description: newData.description,
        image: newData.image,
      })
      // findId.url = newData.image
      // findId.title = newData.title
      // findId.description = newData.description
    } else
      MainService.create({
        title: newData.title,
        description: newData.description,
        image: newData.image,
      })
    console.log(newData)
  }
  const onDelete = (id) => {
    // console.log(id)
    // data.filter((items) => items.id !== id)
    // setData(newList)
    MainService.delete(id)
  }
  return (
    <NotesContext.Provider value={{ data, setData, saveNotes, onDelete }}>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesContextProvider

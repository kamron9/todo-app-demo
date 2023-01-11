import { createContext, useState } from 'react'

export const NotesContext = createContext()
const NotesContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      url: 'https://bit.ly/dan-abramov',
      title: 'notes title-1',
      desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    },
    {
      id: 2,
      url: 'https://bit.ly/dan-abramov',
      title: 'notes title-2',
      desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    },
    {
      id: 3,
      url: 'https://bit.ly/dan-abramov',
      title: 'notes title-3',
      desc: '  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, odit!',
    },
  ])
  return (
    <NotesContext.Provider value={[data, setData]}>
      {children}
    </NotesContext.Provider>
  )
}

export default NotesContextProvider

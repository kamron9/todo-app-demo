import { useDisclosure } from '@chakra-ui/react'
import React, { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()
export const useModal = () => useContext(ModalContext)

const ModalContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose: close } = useDisclosure()
  const [data, setData] = useState({})

  const onUpdate = (items) => {
    onOpen()
    setData(items)
  }
  const onClose = () => {
    setData(null)
    close()
  }
  const onCreate = () => {
    onOpen()
  }
  return (
    <ModalContext.Provider
      value={{ isOpen, onUpdate, onCreate, onClose, data }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContextProvider

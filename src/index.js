import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Root from './root/Root'
import { ChakraProvider } from '@chakra-ui/react'
import ModalContextProvider from './context/ModalContext'
import NotesContextProvider from './context/NotesContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ModalContextProvider>
      <NotesContextProvider>
        <ChakraProvider>
          <Root />
        </ChakraProvider>
      </NotesContextProvider>
    </ModalContextProvider>
  </BrowserRouter>
)

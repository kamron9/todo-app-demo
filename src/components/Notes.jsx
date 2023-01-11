import React from 'react'
import { Container, Box, Button } from '@chakra-ui/react'
import NotesList from './NotesList'
import Modal from './Modal'
import { useModal } from '../context/ModalContext'

const Notes = () => {
  const {onCreate} = useModal()
  return (
    <Container maxW={'100%'} display='flex' justifyContent={'center'}>
      <Container
        p={'5'}
        borderRadius={'12px'}
        mt={'100px'}
        bg={'RGBA(0, 0, 0, 0.04)'}
        maxW={'60%'}
      >
        <Box display={'flex'} justifyContent={'end'}>
          <Button onClick={onCreate} colorScheme={'green'}>add notes</Button>
        </Box>
        <NotesList />
        <Modal />
      </Container>
    </Container>
  )
}

export default Notes

import { useState, useContext } from 'react'
import {
  Container,
  Button,
  Box,
  Image,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { NotesContext } from '../context/NotesContext'

const NotesList = () => {
  const navigate = useNavigate()
  const [list, setList] = useContext(NotesContext)
  const { onUpdate } = useModal()

  //update notes
  const onEdit = (url, title, desc) => {
    onUpdate({
      url,
      title,
      desc,
    })
  }

  //delete notes
  const onDelete = (id) => {
    const newList = list.filter((items) => items.id !== id)
    setList(newList)
  }
  return (
    <Container mt={'50px'} maxW={'100%'}>
      {list.map(({ id, url, title, desc }) => (
        <Stack
          w={'100%'}
          display={'flex'}
          mb={5}
          flexDirection={'row'}
          border={'1px solid gray'}
          p={'5'}
          borderRadius={'12px'}
          key={id}
        >
          <Image
            boxSize='100px'
            borderRadius={'5px'}
            mr={'12px'}
            objectFit='cover'
            src={url}
            alt='Dan Abramov'
          />
          <Box>
            <Heading m={0} size={'md'}>
              {title}
            </Heading>
            <Text my={'1'}>{desc}</Text>
            <Button
              onClick={() => onEdit(url, title, desc)}
              colorScheme={'purple'}
            >
              edit
            </Button>
            <Button onClick={() => onDelete(id)} ml={2} colorScheme={'red'}>
              delete
            </Button>
            <Button
              onClick={() => navigate(`/notes/:${id}`)}
              ml={2}
              colorScheme={'yellow'}
            >
              more
            </Button>
          </Box>
        </Stack>
      ))}
    </Container>
  )
}

export default NotesList

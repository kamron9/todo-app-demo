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
import { useNotes } from '../context/NotesContext'

const NotesList = () => {
  const navigate = useNavigate()
  const { onUpdate } = useModal()
  const { data, setData, onDelete } = useNotes()
  //update notes
  const onEdit = (id, image, title, description) => {
    onUpdate({
      id,
      image,
      title,
      description,
    })
  }

  return (
    <Container mt={'50px'} maxW={'100%'}>
      {data.map(({ id, image, title, description }) => (
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
            src={image}
            alt='Dan Abramov'
          />
          <Box>
            <Heading m={0} size={'md'}>
              {title}
            </Heading>
            <Text my={'1'}>{description}</Text>
            <Button
              onClick={() => onEdit(id, image, title, description)}
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

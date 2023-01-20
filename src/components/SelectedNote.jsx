import {
  Container,
  Box,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainService from '../service/mainService'

const SelectedNote = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [items, setItems] = useState({})
  useEffect(() => {
    getNote()
  }, [id])
  const getNote = async () => {
    try {
      const note = await MainService.getNote(id.replace(':', ''))
      return setItems(note.data)
    } catch (e) {
      throw e
    }
  }
  return (
    <div>
      <Container maxW='100%' centerContent>
        <Stack
          bg={'rgba(0, 0, 0, 0.101)'}
          padding='4'
          borderRadius={'12px'}
          w={'50%'}
          mb={5}
        >
          <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            <Image
              boxSize='50%'
              height={'auto'}
              borderRadius={'5px'}
              mr={'12px'}
              objectFit='cover'
              src={items?.image}
              alt='Dan Abramov'
            />
          </Box>
          <Box>
            <Heading m={0} textAlign={'center'} size={'md'}>
              {items?.title}
            </Heading>
            <Text my={'1'}>{items?.description}</Text>
            <ButtonGroup mt={5}>
              <Button onClick={() => navigate(-1)} ml={2} colorScheme={'gray'}>
                go back
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Container>
    </div>
  )
}

export default SelectedNote

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
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SelectedNote = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [items, setItems] = useState()
  return (
    <div>
      SelectedNote: {id}
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
              src={items?.url || 'https://bit.ly/dan-abramov'}
              alt='Dan Abramov'
            />
          </Box>
          <Box>
            <Heading m={0} textAlign={'center'} size={'md'}>
              {items?.title || 'notes title'}
            </Heading>
            <Text my={'1'}>
              {items?.desc ||
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam incidunt odio facilis pariatur libero alias quam sit illum accusamus minus? Cupiditate id hic iusto rerum ratione nesciunt doloremque! Deserunt eum assumenda distinctio saepe dolorum laborum rem possimus id quam! Velit vitae placeat sunt pariatur error quod tempore distinctio vel mollitia.'}
            </Text>
            <ButtonGroup mt={5}>
              <Button colorScheme={'purple'}>edit</Button>
              <Button ml={2} colorScheme={'red'}>
                delete
              </Button>
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

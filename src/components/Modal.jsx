import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useModal } from '../context/ModalContext'
import { useNotes } from '../context/NotesContext'

function OpenModal() {
  const [urlValue, setUrlValue] = useState('')
  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const { saveNotes } = useNotes()
  const { isOpen, onClose, data } = useModal()
  //save notes
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setUrlValue(data.image)
      setTitleValue(data.title)
      setDescValue(data.desccription)
    }
  }, [data])
  const save = () => {
    saveNotes({
      id: data.id, // ? data.id : new Date().getMilliseconds(),
      title: titleValue,
      image: urlValue,
      description: descValue,
    })
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* file input */}
            <FormControl>
              <FormLabel>Notes Image</FormLabel>
              <Input
                onChange={(e) => setUrlValue(e.target.value)}
                p={'1px'}
                border={'none'}
                type={'file'}
              />
            </FormControl>

            {/* title input */}
            <FormControl mt={5}>
              <FormLabel>Notes Title</FormLabel>
              <Input
                onChange={(e) => setTitleValue(e.target.value)}
                defaultValue={data?.title}
              />
            </FormControl>

            {/* desc input */}
            <FormControl mt={5}>
              <FormLabel>Your Notes</FormLabel>
              <Textarea
                onChange={(e) => setDescValue(e.target.value)}
                defaultValue={data?.description}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => save()} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default OpenModal

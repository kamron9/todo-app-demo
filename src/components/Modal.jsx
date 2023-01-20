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
  const [err, setErr] = useState(false)
  const { saveNotes } = useNotes()
  const { isOpen, onClose, data } = useModal()

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setUrlValue(data.image)
      setTitleValue(data.title)
      setDescValue(data.desccription)
    }
  }, [data])

  //save notes
  const save = () => {
    if (urlValue.length === 0 || descValue.length === 0) {
      setErr(true)
    } else {
      saveNotes({
        id: data.id,
        title: titleValue,
        image: urlValue,
        description: descValue,
      })
      onClose()
    }
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
                onChange={(e) => setUrlValue(e.target.files[0])}
                p={'1px'}
                src={urlValue}
                border={'none'}
                type={'file'}
                accept={'.png, .jpg, .jpeg'}
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
            {err && <p style={{ color: 'red' }}>please fill on input</p>}
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

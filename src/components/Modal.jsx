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
import { useState, useContext } from 'react'
import { useModal } from '../context/ModalContext'
import { NotesContext } from '../context/NotesContext'

function OpenModal() {
  const { isOpen, onClose, data } = useModal()
  const [urlValue, setUrlValue] = useState('')
  const [titleValue, setTitleValue] = useState('')
  const [descValue, setDescValue] = useState('')
  const [list, setList] = useContext(NotesContext)

  //save notes
  const onSave = () => {
    setList([
      ...list,
      {
        id: new Date().getMilliseconds(),
        url: urlValue,
        title: titleValue,
        desc: descValue,
      },
    ])
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
                defaultValue={data?.desc}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => onSave()} colorScheme='blue' mr={3}>
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

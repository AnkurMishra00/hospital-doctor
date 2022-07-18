import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    Input,
    FormLabel,
  } from '@chakra-ui/react'
import React from 'react'


  export default function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button style={{width:'100%' }} variant='outline' onClick={onOpen}>Add Hospital</Button>
        
        {/* <Button style={{width:'100%' }} variant='outline' onClick={onOpen}>Add Doctor</Button> */}
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Hospital Modal Form</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Hospital Name</FormLabel>
                <Input ref={initialRef} placeholder='Hospital Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Address</FormLabel>
                <Input placeholder='Address' />
              </FormControl>

              


            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
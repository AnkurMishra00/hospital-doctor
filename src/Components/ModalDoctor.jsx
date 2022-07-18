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
} from "@chakra-ui/react";
import React from "react";
import { Select } from "@chakra-ui/react";


export default function ModalDoctor() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button style={{ width: "100%" }} variant="outline" onClick={onOpen}>
        Add Doctor
      </Button>
      
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
          <ModalHeader>Doctor Modal Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Doctor Name</FormLabel>
              <Input ref={initialRef} placeholder="Hospital Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Hospital ( select from dropdown )</FormLabel>

              <Select placeholder="Hospital">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Specialisation ( select from dropdown )</FormLabel>

              <Select placeholder="Specialisation">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salary</FormLabel>
              <Input type={"number"} placeholder="Salary" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

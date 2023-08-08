"use client"
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

import {Providers} from './providers'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [value, setValue] = useState<string | undefined>("**Hello world!!!**");
  return (
    <>
      <Providers>
        <div>
        <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent width={600} height={450}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <MDEditor value={value} onChange={setValue} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          
        </div>
      </Providers>
    </>
  )
}







import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Text,
    ModalCloseButton,
    Tag,
    useColorMode
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { LangContext } from '../Hook/LangContext';

export default function Formation() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggleLang } = useContext(LangContext);
    const { colorMode } = useColorMode();
    
    return (
        <>
            <Button onClick = {onOpen} colorScheme = "teal" variant = "ButtonLike">
                {toggleLang ? 'En savoir plus' : 'Show more'}
            </Button>
            <Modal isOpen = {isOpen} onClose = {onClose}>
                <ModalOverlay />
                <ModalContent
                    backgroundColor = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                    pos = {{ sm : 'relative', md : 'none' }}
                    w = {{ sm : '300px', md : '700px', lg : '100%' }}
                >
                    <ModalHeader>
                        {toggleLang ? 'Langages' : 'Languages'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text> - React.js </Text>
                        <Text> - Next.js </Text>
                        <Text> - HTML / CSS / SCSS / JavaScript</Text>
                        <Text> - PHP / MySql </Text>
                        <Text>
                            - Python / Django <Tag pos = "relative"
                                                   top = "3px">{toggleLang ? 'En cours' : 'in progress'}</Tag>
                        </Text>
                    </ModalBody>
                    <ModalHeader>
                        {toggleLang ? 'Librairies' : 'Librarys'}
                    </ModalHeader>
                    <ModalBody>
                        <Text> - Chakra UI</Text>
                        <Text> - Framer-motion</Text>
                        <Text> - GreenSock</Text>
                        <Text> - Bootstrap</Text>
                        <Text>
                            - Tailwind <Tag pos = "relative" top = "2px">{toggleLang ? 'En cours' : 'in progress'}</Tag>
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

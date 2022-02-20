import React, { useContext } from 'react';
import { Button, Container, Divider, Heading } from '@chakra-ui/react';
import Section from '../Layout/Section';
import { LangContext } from '../Hook/LangContext';
import { Para } from '../Layout/CustomText';
import { useRouter } from 'next/router';

const Error404 = () => {
    
    const {toggleLang} = useContext(LangContext)
    const router = useRouter()
    
    const RouterPush = () => {
        router.push('/').then()
    }
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    <Heading
                        fontFamily='Verdana'
                    >
                        {toggleLang
                            ? 'Page non trouvé'
                            : 'Not found'
                        }
                    </Heading>
                    <Para>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        {toggleLang
                            ? "La page que vous essayer de trouvé n'éxiste pas."
                            : "The page you're looking form was not found."
                        }
                    </Para>
                    <Divider mt={5}/>
                    <Button
                        m="20px auto"
                        d='block'
                        colorScheme="teal"
                        onClick={RouterPush}
                    >
                        {toggleLang ? "Retour à l'accueil" : 'Return to home'}
                    </Button>
                </Section>
            </Container>
        </>
    );
};

export default Error404;

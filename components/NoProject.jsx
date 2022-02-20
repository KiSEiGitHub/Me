import { Text, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { LangContext } from '../Hook/LangContext';

export const NoProjectTel = () => {

    const taost = useToast();
    const { TaostLang } = useContext(LangContext)

    return (
        <>
            <Text
                onClick={() => {
                    taost({
                        title: TaostLang[0],
                        description: TaostLang[1],
                        variant: 'solid',
                        duration: 6500,
                        isClosable: true,
                        containerStyle: {
                            width: '350px',
                            position: 'relative',
                            top: '-25px'
                        }
                    });
                }}
                d="inline"
                pos='relative'
                left={{ lg: '-6px', md: '-6px' }}
                variant="Link"
            >
                Projets
            </Text>
        </>
    );
};
import { createContext, useContext } from 'react';
import { TextContext } from './TextContext';
import {
    Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel,
    Box,
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger, useColorMode
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Para } from '../Layout/CustomText';
import { LangContext } from './LangContext';

export const ComponentsContext = createContext(undefined);

const CompContext = (props) => {
    
    const { DataLikes } = useContext(TextContext);
    const { toggleLang } = useContext(LangContext);
    const { colorMode } = useColorMode();
    
    const LikePC = () => {
        return (
            <>
                {DataLikes.map((ele) => <>
                        <Popover>
                            <PopoverTrigger>
                                <Button variant = "ButtonLike">
                                    {toggleLang
                                        ? ele[ 'FR' ][ 'Title' ]
                                        : ele[ 'EN' ][ 'Title' ]
                                    }
                                    <Box>
                                        <ChevronRightIcon />
                                    </Box>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverBody
                                    p = "5"
                                    color = {colorMode === 'light' ? '#56575d' : '#e5e5e5'}
                                    bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}
                                >
                                    <Para>
                                        {toggleLang
                                            ? ele[ 'FR' ][ 'Desc' ]
                                            : ele[ 'EN' ][ 'Desc' ]
                                        }
                                    </Para>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </>
                )}
            </>
        );
    };
    const LikeMobile = () => {
        return (
            <>
                {DataLikes.map((ele) =>
                    <>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            flex = "1"
                                            textAlign = "left"
                                            color = {colorMode === 'light' ? '#626267' : 'teal.200'}
                                            fontWeight = {700}
                                        >
                                            {toggleLang
                                                ? ele[ 'FR' ][ 'Title' ]
                                                : ele[ 'EN' ][ 'Title' ]
                                            }
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb = {4} textAlign = "justify">
                                    {toggleLang
                                        ? ele[ 'FR' ][ 'Desc' ]
                                        : ele[ 'EN' ][ 'Desc' ]
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </>
                )}
            </>
        );
    };
    
    return (
        <ComponentsContext.Provider value = {{ LikePC, LikeMobile }}>
            {props.children}
        </ComponentsContext.Provider>
    );
};

export default CompContext;
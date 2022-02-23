import { EmailIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Container, Flex,
    Icon, Input, InputGroup, InputLeftAddon,
    Text,
    useBoolean, useClipboard,
    useColorMode
} from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { IoLogoGithub } from 'react-icons/io5';
import { SiIndeed } from 'react-icons/si';
import { LangContext } from '../Hook/LangContext';
import { BioSection, BioYear } from '../Layout/bio';
import { CustomCenter } from '../Layout/CustomCoponents';
import { CustomImageOne, CustomImageTwo } from '../Layout/CustomImages';
import {
    ExtLink,
    SectionTitle,
    Para,
    ParaIndent,
    ParaNoJus
} from '../Layout/CustomText';
import Section from '../Layout/Section';
import { TextContext } from '../Hook/TextContext';
import Formation from '../components/Formation';
import { Functioncontext } from '../Hook/FunctionContext';
import { ComponentsContext } from '../Hook/ComponentsContext';

const Home = () => {
    
    const imgRef = useRef();
    const { colorMode } = useColorMode();
    const { toggleLang } = useContext(LangContext);
    const [flag, setFlag] = useBoolean();
    const { Data } = useContext(TextContext);
    const [value, setValue] = useState('tom.lau.974@gmail.com');
    const { hasCopied, onCopy } = useClipboard(value);
    
    const { Copie, valuetwo, isCopied } = useContext(Functioncontext);
    const { LikePC, LikeMobile } = useContext(ComponentsContext);
    
    return (
        <>
            <Container variant = "Main" ref = {imgRef}>
                <Section delay = {0.1}>
                    <CustomCenter bg = {colorMode === 'light' ? '#f5f0e8' : '#313134'}>
                        <Text variant = "FirstPara">
                            {toggleLang ? 'Bonjour, je suis un apprenti développeur' : 'Hello, i\'m a apprentice developer'}
                        </Text>
                    </CustomCenter>
                </Section>
                
                <Box d = {{ sm : 'none', md : 'none', lg : 'block' }}
                     pos = {{ lg : 'relative' }}
                     left = {{ lg : '60px' }}
                >
                    <Section delay = {0.2}>
                        <Box
                            onMouseEnter = {setFlag.on}
                            onMouseOut = {setFlag.off}
                        >
                            <CustomImageOne
                                drag = {imgRef}
                                src = {flag ? '/Image/hover.jpg' : '/Image/pp.png'}
                            />
                        </Box>
                    </Section>
                </Box>
                
                {/* Section Intro */}
                <Section delay = {0.2}>
                    <Text variant = "Me">Tom LAU</Text>
                    <Para
                    >
                        {toggleLang ? 'Recherche contrat d\'alternance' : 'Looking for a work-study contract'}
                    </Para>
                </Section>
                {/* Section Intro */}
                
                <Box d = {{ sm : 'block', md : 'block', lg : 'none' }}
                     m = "20px 0px"
                >
                    <Section delay = {0.2}>
                        <CustomImageTwo
                            src = "/Image/pp.png"
                        />
                    </Section>
                </Box>
                
                {/* Section A propos */}
                <Section delay = {0.3}>
                    <SectionTitle>
                        {toggleLang ? 'À propos' : 'About'}
                    </SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? Data[ 'Other' ][ 'AboutText' ][ 'FR' ]
                            : Data[ 'Other' ][ 'AboutText' ][ 'EN' ]
                        }
                    </ParaIndent>
                </Section>
                {/* Section A propos */}
                
                
                {/* Section Bio */}
                <Section delay = {0.4}>
                    <SectionTitle>Bio</SectionTitle>
                    <Box>
                        <BioSection>
                            <ParaNoJus>
                                <BioYear>2000</BioYear>
                                {toggleLang ? 'Naissance Paris 75' : 'Born in Paris 75'}
                            </ParaNoJus>
                        </BioSection>
                        <BioSection>
                            <ParaNoJus>
                                <BioYear>2016</BioYear>
                                {toggleLang ? 'Lycée professionnel |' : 'Technical College |'} {' '}
                                <ExtLink href = "https://www.lyceelafayette.fr/">
                                    Fontaineroux
                                </ExtLink>
                            </ParaNoJus>
                        </BioSection>
                        <BioSection>
                            <ParaNoJus>
                                <BioYear>2018</BioYear>
                                {toggleLang ? 'Obtention BAC PRO SEN (Système Électronique Numérique)' : 'Obtaining the BAC PRO SEN (System Electronic Numeric)'}
                            </ParaNoJus>
                        </BioSection>
                        <BioSection>
                            <ParaNoJus>
                                <BioYear>2019</BioYear>
                                {toggleLang ? 'Formation développeur full-stack ' : 'Full-stack developper training '}
                                <Box
                                    d = "inline"
                                    pos = "relative"
                                    top = "-2px"
                                >
                                    <Formation />
                                </Box>
                            </ParaNoJus>
                        </BioSection>
                        <BioSection>
                            <ParaNoJus>
                                <BioYear>
                                    2021 {toggleLang ? 'à aujourd\'hui' : 'to present'}
                                </BioYear>
                                {toggleLang ? 'BTS SIO SLAM | Paris |' : 'HND n |'} {' '}
                                <ExtLink href = "https://cfa-insta.fr/">
                                    CFA-Insta
                                </ExtLink>
                            </ParaNoJus>
                        </BioSection>
                    </Box>
                </Section>
                {/* Section Bio */}
                {/* Like */}
                <Section delay = {0.5}>
                    <SectionTitle>❤️</SectionTitle>
                    <Box d = {{ sm : 'none', md : 'block' }}>
                        {LikePC()}
                    </Box>
                    <Box d = {{ sm : 'block', md : 'none' }}>
                        {LikeMobile()}
                    </Box>
                </Section>
                {/* Like */}
                
                <Section delay = {0.6}>
                    <SectionTitle>
                        {toggleLang ? 'Contrat' : 'Contract'}
                    </SectionTitle>
                    <Box>
                        <Para>
                            {toggleLang ? '2 jours en formation / 3 jours en entreprise' : '2 days in formation  / 3 days in society'}
                        </Para>
                    </Box>
                </Section>
                
                <Section delay = {0.7}>
                    <SectionTitle>
                        {toggleLang ? 'Sur internet' : 'On the web'}
                    </SectionTitle>
                    <Button variant = "ghost" colorScheme = "teal" d = "block"
                            leftIcon = {<Icon as = {IoLogoGithub} />}>
                        <ExtLink href = "https://github.com/KiSEiGitHub">
                            Github
                        </ExtLink>
                    </Button>
                    <Button variant = "ghost" colorScheme = "teal" leftIcon = {<Icon as = {ImLinkedin} />}>
                        <ExtLink href = "https://www.linkedin.com/in/tom-lau-7a1732218/">
                            LinkeDIn
                        </ExtLink>
                    </Button>
                    <Button variant = "ghost" colorScheme = "teal" d = "block" leftIcon = {<Icon as = {SiIndeed} />}>
                        <ExtLink href = "https://my.indeed.com/p/toml-gllqqvs">
                            Indeed
                        </ExtLink>
                    </Button>
                </Section>
                
                <Section delay = {0.8}>
                    <SectionTitle>
                        {toggleLang ? 'Sinon' : 'Otherwise'}
                    </SectionTitle>
                    <Flex mb = {2}>
                        <InputGroup>
                            {/* eslint-disable-next-line react/no-children-prop */}
                            <InputLeftAddon children = {<EmailIcon />} />
                            <Input value = {value} isReadOnly />
                            {/* eslint-disable-next-line react/no-children-prop */}
                            {/*<InputRightAddon children = "@gmail.com"/>*/}
                        </InputGroup>
                        <Button onClick = {onCopy} ml = {2} colorScheme = "teal">
                            {hasCopied
                                ? toggleLang
                                    ? 'Coller'
                                    : 'Copied'
                                : toggleLang
                                    ? 'Copier'
                                    : 'Copy'
                            }
                        </Button>
                    </Flex>
                    <Flex mb = {2}>
                        <InputGroup>
                            {/* eslint-disable-next-line react/no-children-prop */}
                            <InputLeftAddon children = {<BsFillPhoneFill />} />
                            <Input value = {valuetwo} isReadOnly />
                        </InputGroup>
                        <Button onClick = {() => Copie(valuetwo)} ml = {2} colorScheme = "teal">
                            {isCopied
                                ? toggleLang
                                    ? 'Coller'
                                    : 'Copied'
                                : toggleLang
                                    ? 'Copier'
                                    : 'Copy'
                            }
                        </Button>
                    </Flex>
                </Section>
            </Container>
        </>
    );
};

export default Home;
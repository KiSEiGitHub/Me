import { Box, Container, Divider, ListItem, SimpleGrid, Tag, Text, UnorderedList, Button } from '@chakra-ui/react';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import React, { useContext } from 'react';
import Link from 'next/link';
import { TextContext } from '../../Hook/TextContext';
import Section from '../../Layout/Section';
import { LangContext } from '../../Hook/LangContext';
import Image from 'next/image';

import AeroForm from '../../public/Image/Project/AirTrack/AeroForm.png';
import AeroTab from '../../public/Image/Project/AirTrack/AeroTab.png';
import AvionForm from '../../public/Image/Project/AirTrack/AvionForm.png';
import AvionTab from '../../public/Image/Project/AirTrack/AvionTab.png';
import PiloteForm from '../../public/Image/Project/AirTrack/PiloteForm.png';
import PiloteTab from '../../public/Image/Project/AirTrack/PiloteTab.png';
import VolForm from '../../public/Image/Project/AirTrack/VolForm.png';
import VolTab from '../../public/Image/Project/AirTrack/VolTab.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { ArrowBackIcon } from '@chakra-ui/icons';
import BtnReturnPro from '../../components/BtnReturnPro';

const AirTrack = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { DataProject } = useContext(TextContext);
    
    return (
        <>
            <Container variant = "Main">
                
                <Section delay = {0.2}>
                    <SectionTitle>AirTrack</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>Windows/Linux</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>PHP, HTML, CSS, SQL</span>
                    </Box>
                    <Box>
                        <Tag mr = {2}>Source</Tag>
                        <ExtLink href = "https://github.com/KiSEiGitHub/Projet-Groupe-Avion">
                            Github
                        </ExtLink>
                    </Box>
                </Section>
                
                <Section delay = {0.3}>
                    <SectionTitle>
                        {toggleLang ? 'Description' : 'Description'}
                    </SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject[ 'AirTrack' ][ 'DescriptionProjet' ][ 'FR' ]
                            : DataProject[ 'AirTrack' ][ 'DescriptionProjet' ][ 'EN' ]
                        }
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>Tâches</SectionTitle>
                    <ParaIndent>
                        {toggleLang
                            ? DataProject[ 'AirTrack' ][ 'Task' ][ 'FR' ]
                            : DataProject[ 'AirTrack' ][ 'Task' ][ 'EN' ]
                        }
                    </ParaIndent>
                    <UnorderedList
                        mt = {4}
                        fontSize = "1em"
                    >
                        <ListItem>
                            <span style = {{ fontWeight : '800' }}>Vols </span>
                            (idvol, desivol, duree, datevole, idavion, idaeroport1, idaeroport2, idpilote1, idpilote2)
                        </ListItem>
                        <ListItem>
                            <span style = {{ fontWeight : '800' }}>Pilotes </span>
                            (idpilote, nom, prenom, age, email, adresse, grade)
                        </ListItem>
                        <ListItem>
                            <span style = {{ fontWeight : '800' }}>Avions </span>
                            (idavion, marque, etat, nbplaces, typeavion)
                        </ListItem>
                        <ListItem>
                            <span style = {{ fontWeight : '800' }}>Aéroport </span>
                            (idaeroport, desiaero, adresse, statut)
                        </ListItem>
                    </UnorderedList>
                    <Text variant = "ParaIndent" mt = {4}>
                        {toggleLang
                            ? DataProject[ 'AirTrack' ][ 'Task' ][ 'FR2' ]
                            : DataProject[ 'AirTrack' ][ 'Task' ][ 'EN2' ]
                        }
                    </Text>
                    <Text variant = "ParaInde" mt = {2}>
                        {toggleLang
                            ? 'Ajouter à cela les fonctions usuelles sur chaque tableau telle que'
                            : 'Then add the basic function like '
                        }
                    </Text>
                    <UnorderedList
                        mt = {4}
                        fontSize = "1em"
                    >
                        <ListItem>
                            {toggleLang
                                ? 'Boutton modifier'
                                : 'Edit button'
                            }
                        </ListItem>
                        <ListItem>
                            {toggleLang
                                ? 'Boutton supprimer'
                                : 'Delete button'
                            }
                        </ListItem>
                    </UnorderedList>
                    <Text variant = "Para" mt = {4}>
                        {toggleLang
                            ? 'Ainsi qu\'une fonction de connexion / déconnexion et d\'un footer'
                            : 'With a connect / disconnect function and a footer '
                        }
                    </Text>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>{toggleLang ? 'Maquette' : 'Model'}</SectionTitle>
                    <Swiper
                        grabCursor = {true}
                        modules = {[Pagination, EffectCards]}
                        effect = {'cards'}
                    >
                        <SwiperSlide>
                            <Image src = {AeroForm} alt = {'Formulaire aéroport'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {AeroTab} alt = {'Tableau aéroport'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {VolForm} alt = {'Formulaire Vol'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {VolTab} alt = {'Tableau Vol'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {AvionForm} alt = {'Formulaire avion'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {AvionTab} alt = {'Formulaire Tableau'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {PiloteForm} alt = {'Formulaire Pilotes'} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src = {PiloteTab} alt = {'Pilotes tableau'} />
                        </SwiperSlide>
                    </Swiper>
                </Section>
                
                <Section delay = {0.4}>
                    <BtnReturnPro />
                </Section>
            </Container>
        </>
    );
};

export default AirTrack;
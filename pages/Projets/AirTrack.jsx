import { Box, Container, ListItem, Tag, Text, UnorderedList } from '@chakra-ui/react';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import React, { useContext } from 'react';
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
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import BtnReturnPro from '../../components/BtnReturnPro';

const AirTrack = () => {
    
    const { toggleLang } = useContext(LangContext);
    const { DataProject } = useContext(TextContext);
    
    const Tab = [
        AeroTab, AeroTab, AvionTab, AvionTab,
        PiloteForm, PiloteTab, VolTab, VolForm
    ];
    
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
            </Container>
            
            <Container variant = "Full-W">
                <Section delay = {0.6}>
                    <SectionTitle textAlign = "center">Maquette</SectionTitle>
                    <Box maxW = "100%" d = {{ xl : 'block', md : 'none', sm : 'none', lg : 'block' }}>
                        <Swiper
                            slidesPerView = {3}
                            spaceBetween = {30}
                            grabCursor = {true}
                            pagination = {{
                                clickable : true
                            }}
                            modules = {[Pagination]}
                        >
                            {Tab.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <Image src = {item} alt = "photo" width = {'870px'} height = {'750px'} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Box>
                    
                    <Box maxW = "100%" display = {{ xl : 'none', md : 'block', sm : 'block', lg : 'none' }}>
                        <Swiper>
                            {Tab.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <Image src = {item} alt = "photo" />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Box>
                </Section>
            </Container>
        </>
    );
};

export default AirTrack;
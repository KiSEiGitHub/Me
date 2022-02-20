import { Box, Container, ListItem, SimpleGrid, Tag, Text, UnorderedList } from '@chakra-ui/react';
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
                    <SimpleGrid minChildWidth = "220px" spacing = "20px">
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '3px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {AeroForm}
                            />
                            <Text textAlign = "center">Formulaire Aéroport</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '30px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {AeroTab}
                            />
                            <Text textAlign = "center">Tableau Aéroport</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '30px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {AvionForm}
                            />
                            <Text textAlign = "center">Formulaire Avions</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '30px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {AvionTab}
                            />
                            <Text textAlign = "center">Tableau Aéroport</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '30px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {PiloteForm}
                            />
                            <Text textAlign = "center">Formulaire Pilote</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '20px', lg : '30px', xl : '90px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {PiloteTab}
                            />
                            <Text textAlign = "center">Tableau Pilote</Text>
                        </Box>
                        <Box height = "200px" mb = {{ sm : '120px', md : '250px', lg : '30px', xl : '30px' }}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {VolForm}
                            />
                            <Text textAlign = "center">Formulaire Vol</Text>
                        </Box>
                        <Box height = "200px" mb = {20}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <Image
                                src = {VolTab}
                            />
                            <Text textAlign = "center">Tableau Vol</Text>
                        </Box>
                    </SimpleGrid>
                </Section>
            </Container>
        </>
    );
};

export default AirTrack;
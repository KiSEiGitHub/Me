import React from 'react';
import { Container, ListItem, UnorderedList } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ItalicText, Para, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { Linkk } from '../../Layout/NavLink';

const Bts = () => {
    return (
        <>
            <Container variant = "Main">
                
                <Section delay = {0.4}>
                    <SectionTitle>BTS SIO</SectionTitle>
                    <ParaIndent mb = {2}>
                        Le BTS <span style = {{ fontStyle : 'italic' }}>Service Informatique aux Organisation</span>
                        {' '}est un diplôme reconnu par l&apos;état de niveau Bac+2.
                    </ParaIndent>
                    <Para mb = {2}>
                        Le programme a évolué en fonction de la place et du rôle des TIC
                        <ItalicText>(Technologies d’Information Communication)</ItalicText>
                        et
                        propose deux spécialités bien distinctes : {' '}
                    </Para>
                    <UnorderedList>
                        <ListItem>
                            BTS SIO {' '}
                            <Linkk href = {'/Bts/Slam'}>
                                SLAM
                            </Linkk>
                        </ListItem>
                        <ListItem>
                            BTS SIO {' '}
                            <Linkk href = {'/Bts/Sisr'}>
                                SISR
                            </Linkk>
                        </ListItem>
                    </UnorderedList>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>Veille technologique</SectionTitle>
                    <ParaIndent mb = {2}>
                        Qu&apos;est-ce qu&apos;une veille technologique ?
                    </ParaIndent>
                    <Para>
                        Elle consiste à s&apos;informer de façon systématique sur les techniques les plus récentes et surtout
                        sur
                        leur mise à disposition commerciale.
                    </Para>
                    <Para mt = {2}>
                        J&apos;ai décidé de parler de la {' '}
                        <Linkk href = {'/Bts/VeilleTech'}>
                            cybersécurité
                        </Linkk>
                        .
                    </Para>
                </Section>
                
                <Section delay = {0.6}>
                    <SectionTitle>Veille Juridique</SectionTitle>
                    <ParaIndent mb = {2}>
                        Qu&apos;est-ce qu&apos;une veille juridique ?
                    </ParaIndent>
                    <Para>
                        Une veille juridique est un ensemble d’actions permettant de se tenir au fait des informations
                        pertinentes dans les domaines législatif, réglementaire, jurisprudentiel, voire doctrinal.
                    </Para>
                    <Para mt = {2}>
                        J&apos;ai décidé de parler de la {' '}
                        <Linkk href = {'/Bts/VeilleJur'}>
                            responsabilité des administrateurs système et réseau
                        </Linkk>
                        .
                    </Para>
                </Section>
            </Container>
        </>
    );
};

export default Bts;

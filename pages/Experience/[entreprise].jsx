import { Box, Button, Container, Divider, Tag } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { LangContext } from '../../Hook/LangContext';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Entreprise = (props) => {
    
    const { toggleLang } = useContext(LangContext);
    const { push } = useRouter();
    
    if (!props.entrepriseEnCours) {
        return <h1>Chargment</h1>;
    }
    
    const Rediect = () => {
        push('/Experience');
    };
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.2}>
                    <SectionTitle>{props.entrepriseEnCours[ 'Title' ]}</SectionTitle>
                    <Tag>{props.entrepriseEnCours[ 'Date' ]}</Tag>
                    <Box mt = {2}>
                        <Tag mr = {2}>{toggleLang ? 'Site' : 'Website'}</Tag>
                        <ExtLink href = {props.entrepriseEnCours[ 'Link' ]}>
                            {props.entrepriseEnCours[ 'Title' ]}
                        </ExtLink>
                    </Box>
                    <Box mt = {2}>
                        <Tag mr = {2}>{toggleLang ? 'Durée' : 'Duration'}</Tag>
                        <span>
                            {toggleLang
                                ? props[ 'entrepriseEnCours' ][ 'Duree' ][ 'fr' ]
                                : props[ 'entrepriseEnCours' ][ 'Duree' ][ 'en' ]
                            }
                        </span>
                    </Box>
                    <Box mt = {2} mb = {5}>
                        <Tag mr = {2}>{toggleLang ? 'Type' : 'Job'}</Tag>
                        <span>
                            {toggleLang
                                ? props[ 'entrepriseEnCours' ][ 'Do' ][ 'fr' ]
                                : props[ 'entrepriseEnCours' ][ 'Do' ][ 'en' ]
                            }
                        </span>
                    </Box>
                    <Divider mb = {5} />
                    <ParaIndent>
                        {toggleLang
                            ? props.entrepriseEnCours[ 'Description' ][ 'fr' ]
                            : props.entrepriseEnCours[ 'Description' ][ 'en' ]
                        }
                        .
                    </ParaIndent>
                    <Divider mt = {5} />
                    <Button
                        onClick = {Rediect}
                        mt = {5}
                        d = "block"
                        mx = "auto"
                        colorScheme = "teal"
                    >
                        <ArrowBackIcon />
                    </Button>
                </Section>
            </Container>
        
        </>
    );
};

export default Entreprise;

export async function getStaticProps(context) {
    const slug = context.params.entreprise;
    const data = await import('../../Json/Exp.json');
    const entrepriseEnCours = data.Experience.find(ent => ent.name === slug);
    
    if (!entrepriseEnCours) {
        return {
            notFound : true
        };
    }
    
    return {
        props : {
            entrepriseEnCours : entrepriseEnCours.data
        }
    };
}

export async function getStaticPaths() {
    const data = await import('../../Json/Exp.json');
    const paths = data.Experience.map((item) => ( {
        params : { entreprise : item.name }
    } ));
    
    return {
        paths,
        fallback : true
    };
}
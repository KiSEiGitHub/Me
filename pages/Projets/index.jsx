import React, {useContext} from 'react';
import {Container, useMediaQuery} from '@chakra-ui/react';
import Section from '../../Layout/Section';
import {LangContext} from '../../Hook/LangContext';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import {ProjetMobileSchoolOne, ProjetMobileShcoolTwo, ProjetMobileThree} from "../../components/Projects/ProjetMobile";
import {ProjetConsole, ProjetEcole, ProjetPerso} from "../../components/Projects/ProjetPc";
import {SectionTitle} from "../../Layout/CustomText";

const Projet = () => {

    const {toggleLang} = useContext(LangContext);
    const [BreakPoint] = useMediaQuery('(min-width: 1024px)');

    return (
        <>
            <Container variant='Proj'>

                <Section delay={0.3}>
                    <SectionTitle textAlign='center'>
                        {toggleLang
                            ? "Projets d'école"
                            : "School projects"
                        }
                    </SectionTitle>
                    {BreakPoint
                        ? <ProjetEcole />
                        : <ProjetMobileSchoolOne />
                    }
                </Section>

                <Section delay={0.4}>
                    <SectionTitle textAlign='center'>
                        {toggleLang
                            ? "Projets perso"
                            : 'Personnal projects'
                        }
                    </SectionTitle>
                    {BreakPoint
                        ? <ProjetPerso />
                        : <ProjetMobileShcoolTwo />
                    }
                </Section>

                <Section delay={0.5}>
                    <SectionTitle textAlign='center'>
                        {toggleLang
                            ? 'Projets console'
                            : 'Console projects'
                        }
                    </SectionTitle>
                    {BreakPoint
                        ? <ProjetConsole />
                        : <ProjetMobileThree />
                    }
                </Section>
            </Container>
        </>
    );
};

export default Projet;

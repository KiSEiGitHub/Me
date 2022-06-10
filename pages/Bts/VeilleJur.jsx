import React, { useContext } from 'react';
import { Para, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import Section from '../../Layout/Section';
import { Container, ListItem, UnorderedList, useColorMode } from '@chakra-ui/react';
import { TextContext } from '../../Hook/TextContext';

const VeilleJur = () => {
    const { colorMode } = useColorMode();
    const { BTSVeille } = useContext(TextContext);
    
    const color = colorMode === 'light' ? '#319694' : '#81e6d9';
    
    return (
        <>
            <Container variant = "Reading">
                
                <Section delay = {0.3}>
                    <SectionTitle>Métier</SectionTitle>
                    <ParaIndent>
                        {BTSVeille[ 'Juri' ][ 'Metier' ]}
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.4}>
                    <SectionTitle>Rôle</SectionTitle>
                    <UnorderedList>
                        <ListItem>
                            Informer, former, conseiller, alerter les acteurs de l&apos;organisation pour tout ce
                            qui concerne le système informatique et notatement les risques encourus (atteinte aux
                            fichiers, captation de données)
                        </ListItem>
                        <ListItem>
                            Sécuriser le système, il doit tout mettre en oeuvre pour y parvenir.
                        </ListItem>
                        <ListItem>
                            Contrôler l’activité sur le réseau afin de prévenir les risques
                        </ListItem>
                        <ListItem>
                            Pratiquer une veille juridique (loi, directive européenne,jurisprudence, recommandations
                            Cnil)
                        </ListItem>
                    </UnorderedList>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>Obligation</SectionTitle>
                    <ParaIndent>
                        L&apos;ASR dispose certes de moyens d&apos;investigation (contrôle du débit, durée des
                        connexions, sites
                        web, accès en sa qualité d&apos;administrateur aux serveurs de fichiers, aux serveurs web et aux
                        serveurs de messagerie) mais il doit néanmoins agir en respectant des principes :
                    </ParaIndent>
                    <Para mt = {5}>
                        <span style = {{ fontWeight : 700, color : color }}>De loyauté</span>{' '}
                        sa démarche doit être juste, sincère et être uniquement justifiée par un impératif de sécurité.
                        Elle doit être conforme à la finalité pour laquelle le contrôle a été décidé. Dans le cas
                        contraire, il engagerait sa responsabilité pénale et professionnelle.
                    </Para>
                    
                    <Para mt = {5}>
                        <span style = {{ fontWeight : 700, color : color }}>De transparence</span>{' '}
                        les acteurs internes à l&apos;organisation ainsi que les tiers doivent être informés de
                        l&apos;éventualité
                        d’un contrôle. Le règlement intérieur et la charte informatique informent les acteurs de
                        l&apos;entreprise des dispositifs de contrôle mis en œuvre.
                    </Para>
                    
                    <Para mt = {5}>
                        <span style = {{ fontWeight : 700, color : color }}>De confidentialité</span>{' '}
                        l&apos;ASR est tenu au secret professionnel : il a l&apos;interdiction de diffuser à quiconque,
                        les
                        informations qu&apos;il aurait eu à connaître dans le cadre de ses fonctions. Il ne doit en
                        aucun cas
                        divulguer ses informations.À défaut, il mettrait en œuvre sa responsabilité pénale en vertu de
                        l&apos;article 226.15 du code pénal.
                    </Para>
                </Section>
                
                <Section delay = {0.6}>
                    <SectionTitle>Article juridique</SectionTitle>
                    <ParaIndent>
                        L&apos;article 432-9 alinéa 2 du code pénal prévoit en effet que, si l&apos;ASR peut accéder aux
                        données à
                        caractère personnel des salariés, il n&apos;est cependant pas autorisé à les divulguer.
                        Cette obligation de confidentialité de l&apos;administrateur système et réseau fait également
                        l&apos;objet
                        d&apos;une clause dans son contrat de travail.
                    </ParaIndent>
                    
                    <Para mt = {2}>
                        La Directive 200258 du 12 Juillet 2002 précise que l’ASR doit prendre toutes les « mesures
                        appropriées » pour assurer la sécurité.
                    </Para>
                    
                    <Para mt = {2}>
                        <span style = {{
                            fontWeight : 700,
                            color      : color
                        }}>Cours d’appel arrêt du 17 décembre 2002 :</span>{' '}
                        renforce le rôle des administrateurs système et réseau
                        quant à la nécessité de surveiller le trafic sur les réseaux de leurs entreprises. La découverte
                        de la consultation d&apos;un salarié, des sites pedophiles c&apos;est faite à l&apos;occasion d&apos;une opération
                        de maintenance.
                    </Para>
                </Section>
                
                <Section delay = {0.7}>
                    <SectionTitle>Sanctions</SectionTitle>
                    <Para>
                        <span style = {{
                            fontWeight : 700,
                            color      : color
                        }}>
                            Art 432-9 :
                        </span>
                        {' '}le détournement, la suppression ou l’ouverture de correspondances ou la révélation
                             du contenu de ces correspondances, est puni jusqu’à trois ans d’emprisonnement ainsi que
                             45000
                             euros d’amende.
                    </Para>
                </Section>
                
                <Section delay = {0.8}>
                    <SectionTitle>Conclusion</SectionTitle>
                    <ParaIndent>
                        L&apos;ASR occupe une place déterminante dans l&apos;entreprise dont l&apos;objectif est d’optimiser
                        l&apos;utilisation des ressources informatiques lesquelles sont perçues comme des outils de la
                        compétitivité. Il dispose de pouvoirs très étendus pour sécuriser le système informatique mais
                        doit, dans le cadre de ses contrôles, respecter le secret des correspondances ainsi que la vie
                        privée de ses salariés. Son rôle et ses responsabilités évoluent du fait de l&apos;externalisation
                        des SI.
                    </ParaIndent>
                </Section>
            </Container>
        </>
    );
};

export default VeilleJur;

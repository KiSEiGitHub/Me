import React, { useContext } from 'react';
import { Box, Container, Tag, Text } from '@chakra-ui/react';
import Section from '../../Layout/Section';
import { ExtLink, ParaIndent, SectionTitle } from '../../Layout/CustomText';
import { TextContext } from '../../Hook/TextContext';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

// import des images
import Chat from '../../public/Image/Project/Leveling/Chat.png';
import GallerieJeu from '../../public/Image/Project/Leveling/Gallerie de jeu.png';
import GroupeDesc from '../../public/Image/Project/Leveling/Groupe - Description.png';
import GroupeDis from '../../public/Image/Project/Leveling/Groupe - Discussions.png';
import GroupeMem from '../../public/Image/Project/Leveling/Groupe - Membres.png';
import Jeu from '../../public/Image/Project/Leveling/Jeu.png';
import ModifierProfil from '../../public/Image/Project/Leveling/Modifier le profil.png';
import ModifierProfil2 from '../../public/Image/Project/Leveling/Modifier le profil – 1.png';
import Accueil from '../../public/Image/Project/Leveling/accueil.png';
import Inscrip from '../../public/Image/Project/Leveling/inscription.png';
import Connexion from '../../public/Image/Project/Leveling/Page de connexion.png';
import UserAmis from '../../public/Image/Project/Leveling/Profil utilisateur - Amis.png';
import USerAmis2 from '../../public/Image/Project/Leveling/Profil utilisateur - Amis – 1.png';
import UserDesc from '../../public/Image/Project/Leveling/Profil utilisateur - Description.png';
import UserGroupe from '../../public/Image/Project/Leveling/Profil utilisateur - Groupes.png';
import UserJeux from '../../public/Image/Project/Leveling/Profil utilisateur - Jeux.png';
import Rank from '../../public/Image/Project/Leveling/Ranks.png';

const Leveling = () => {
    
    const { DataProject } = useContext(TextContext);
    
    const Width = '690px';
    const Height = '820px';
    
    const Tab = [
        Chat, GallerieJeu, GroupeDesc, GroupeDis, GroupeMem, Jeu, ModifierProfil,
        ModifierProfil2, Accueil, Inscrip, Connexion, UserAmis, USerAmis2,
        UserDesc, UserGroupe, UserJeux, Rank
    ];
    
    return (
        <>
            <Container variant = "Main">
                <Section delay = {0.4}>
                    <SectionTitle>Leveling</SectionTitle>
                    <Tag mb = {2}>2022</Tag>
                    <Box mb = {2}>
                        <Tag mr = {2}>Platforme</Tag>
                        <span>PC / Mobile</span>
                    </Box>
                    <Box mb = {4}>
                        <Tag mr = {2}>Stack</Tag>
                        <span>PHP / SQL / HTML / CSS</span>
                    </Box>
                </Section>
                
                <Section delay = {0.5}>
                    <SectionTitle>Description</SectionTitle>
                    <ParaIndent>
                        {DataProject[ 'Leveling' ][ 'Description' ]}
                    </ParaIndent>
                </Section>
                
                <Section delay = {0.6}>
                    <SectionTitle>Thèmes</SectionTitle>
                    <ParaIndent>
                        Le réseau social du gaming.
                    </ParaIndent>
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
                                        <Image src = {item} alt = "photo" width = {Width} height = {Height} />
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

export default Leveling;

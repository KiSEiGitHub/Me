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
    
    const Oui = [
        { id : 1, img : Chat },
        { id : 2, img : GallerieJeu },
        { id : 3, img : GroupeDesc },
        { id : 4, img : GroupeDis },
        { id : 5, img : GroupeMem },
        { id : 6, img : Jeu },
        { id : 7, img : ModifierProfil },
        { id : 8, img : ModifierProfil2 },
        { id : 9, img : Accueil },
        { id : 10, img : Inscrip },
        { id : 11, img : Connexion },
        { id : 12, img : UserAmis },
        { id : 13, img : USerAmis2 },
        { id : 14, img : UserDesc },
        { id : 15, img : UserGroupe },
        { id : 16, img : UserJeux },
        { id : 17, img : Rank }
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
                            {Oui.map((item) => {
                                return (
                                    <SwiperSlide key = {item.id}>
                                        <Image src = {item.img} alt = "photo" width = {Width} height = {Height} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Box>
                    
                    <Box maxW = "100%" display = {{ xl : 'none', md : 'block', sm : 'block', lg : 'none' }}>
                        <Swiper>
                            {Oui.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <Image src = {item.img} alt = "photo" />
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

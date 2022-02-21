import { Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SectionTitle } from '../../Layout/CustomText'
import Section from '../../Layout/Section'
import { LangContext } from '../../Hook/LangContext'
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { LinkBox } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from 'next/link'

const Projet = (props) => {

    const { toggleLang } = useContext(LangContext)
    return (
        <>
            <Container variant="Main">
                <Section delay={0.2}>
                    <SectionTitle>
                        {toggleLang
                            ? "Expérience professionnel"
                            : "Professional experience"
                        }
                    </SectionTitle>
                    <SimpleGrid columns={2} spacingX="40px" spacingY="20px" textAlign="center">
                        {props.array.map((item) =>
                            <>
                                <Box height="120px">
                                    <LinkBox cursor="pointer">
                                        <Link href={`/Experience/${item.name}`} passHref>
                                            <Text variant="ProjetLink">{item.data[ 'Title' ]}</Text>
                                        </Link>
                                    </LinkBox>
                                </Box>
                            </>
                        )}
                    </SimpleGrid>
                </Section>
            </Container>
        </>
    )
}

export default Projet

export async function getStaticProps() {
    const data = await import('../../Json/Exp.json')
    const array = data.Experience

    return {
        props: {
            array
        }
    }
}
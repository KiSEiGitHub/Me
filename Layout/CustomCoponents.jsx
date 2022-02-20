import { Center, Container, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const CustomCenter = ({ children, bg }) => (
    <Center
        borderRadius={10}
        bg={bg}
    >
        {children}
    </Center>
);

export const CustomContainer = ({ children, variant, sm, md, h }) => (
    <Container
        variant={variant}
        w={{ sm: sm + 'px', md: md + 'px' }}
        h={h}
    >
        {children}
    </Container>
);

export const CustomFlex = ({ children }) => (
    <Flex
        m="100px auto 0"
        flexWrap="wrap"
        maxW="900px"
        justifyContent="center"
    >
        {children}
    </Flex>
);

export const CustomLinkExp = ({ children, href }) => (
    <Link href={href}>
        <a target="_blank">
            <Heading
                variant="Name"
                textDecoration="underline 5px"
                textUnderlineOffset={'6px'}
                mb={5}
                fontSize={{ sm: '32px', md: '42px', lg: '32px' }}
            >
                {children}
            </Heading>
        </a>
    </Link>
);
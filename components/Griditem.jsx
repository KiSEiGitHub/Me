import Image from 'next/image';
import Link from 'next/link';
import { Box, Text, LinkBox } from '@chakra-ui/react';
import { Global, css, jsx} from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
    
    <Box w = "100%" textAlign = "center">
        <LinkBox cursor = "pointer">
            <Image
                src = {thumbnail}
                alt = {title}
                className = {css`
                    width: 20px;
                    padding: 32px;
                `}
                placeholder = "blur"
            />
            {/* eslint-disable-next-line @next/next/link-passhref */}
            <Link href = {href}>
                <Text
                    mt = {2}
                    variant = "ProjetLink"
                    _hover = {{ textDecoration : 'underline', textUnderlineOffset : 3 }}
                >
                    {title}
                </Text>
            </Link>
            <Text fontSize = {14}>{children}</Text>
        </LinkBox>
    </Box>
);

export const GridItemStyle = () => (
    <Global
        styles = {`
      .grid-item-thumbnail {
        border-radius: 12px;
        width: 20px;
        height: 20px
      }
    `}
    />
);
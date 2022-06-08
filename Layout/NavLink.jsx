import { Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export const NavLink = ({ children, href }) => (
    <Text
        fontSize = "1em"
        cursor = "pointer"
        textUnderlineOffset = {3}
        pos = "relative"
        top = "2px"
        _hover = {{
            textDecoration : 'underline'
        }}
    >
        <Link href = {href} passHref>
            {children}
        </Link>
    </Text>
);

export const Linkk = ({ children, href }) => {
    
    const { colorMode } = useColorMode();
    
    return (
        
        <Text
            display = "inline"
            color = {colorMode === 'light' ? '#3d7aed' : '#ff63c3'}
            _hover = {{
                textDecoration : 'underline',
            }}
        >
            <Link href = {href}>
                {children}
            </Link>
        </Text>
    );
    
};

export const LinkBlank = ({ children, href }) => {
    
    const { colorMode } = useColorMode();
    
    return (
        <Text
            display = "inline"
            color = {colorMode === 'light' ? '#3d7aed' : '#ff63c3'}
            _hover = {{
                textDecoration : 'underline',
            }}
        >
            <Link href = {href}>
                <a target = "_blank">
                    {children}
                </a>
            </Link>
        </Text>
    );
    
};
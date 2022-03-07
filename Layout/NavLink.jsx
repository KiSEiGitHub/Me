import {Text} from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

export const NavLink = ({children, href}) => (
    <Text
        fontSize='1em'
        cursor='pointer'
        textUnderlineOffset={3}
        pos='relative'
        top="2px"
        _hover={{
            textDecoration: 'underline'
        }}
    >
        <Link href={href} passHref>
            {children}
        </Link>
    </Text>
)
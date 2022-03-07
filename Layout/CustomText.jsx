import {Text, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import React from "react";

export const ExtLink = ({children, href}) => (
    <Link href={href} target="_blank">
        {children} <ExternalLinkIcon/>
    </Link>
);

export const Para = ({children}) => (
    <Text variant="Para">
        {children}
    </Text>
);

export const ParaIndent = ({children}) => (
    <Text variant="ParaIndent">
        {children}
    </Text>
);

export const SectionTitle = ({children}) => (
    <Text variant="section-title">
        {children}
    </Text>
);

export const ParaNoJus = ({children}) => (
    <Text variant="ParaNoJus">
        {children}
    </Text>
)
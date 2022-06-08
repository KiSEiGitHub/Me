import {Text, Link} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import React from "react";

export const ExtLink = ({children, href}) => (
    <Link href={href} target="_blank">
        {children} <ExternalLinkIcon/>
    </Link>
);

export const Para = ({children, mt, mb}) => (
    <Text variant="Para" mt={mt} mb={mb}>
        {children}
    </Text>
);

export const ParaIndent = ({children, mt, mb}) => (
    <Text variant="ParaIndent" mt={mt} mb={mb}>
        {children}
    </Text>
);

export const SectionTitle = ({children, textAlign}) => (
    <Text variant="section-title" textAlign={textAlign}>
        {children}
    </Text>
);

export const ParaNoJus = ({children}) => (
    <Text variant="ParaNoJus">
        {children}
    </Text>
)

export const ItalicText = ({children}) => (
    <Text variant="italic">
        {children}
    </Text>
)
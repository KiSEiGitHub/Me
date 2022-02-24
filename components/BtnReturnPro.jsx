import React from 'react';
import { Button, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BtnReturnPro = () => {
    return (
        <>
            <Divider />
            <Link href = {'/Projets'} passHref>
                <Button colorScheme = {'teal'} d = "block" m = "30px auto 0">
                    <ArrowBackIcon />
                </Button>
            </Link>
        </>
    );
};

export default BtnReturnPro;

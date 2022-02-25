import React from 'react';
import { Box, Button, Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BtnReturnPro = () => {
    return (
        <>
            <Box>
                <Divider />
                <Link href = {'/Projets'} passHref>
                    <Button colorScheme = {'teal'} d = "block" m = "30px auto 0">
                        <ArrowBackIcon />
                    </Button>
                </Link>
            </Box>
        </>
    );
};

export default BtnReturnPro;

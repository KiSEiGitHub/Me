import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Nav from "./Nav";
import {useMediaQuery} from "@chakra-ui/react";
import NavMobile from "./NavMobile";

const MainContainer = (props) => {

    const router = useRouter();
    const [flip] = useMediaQuery('(min-width: 540px)')

    return (
        <>
            <Head>
                <title>Tom - {router.pathname.split('/')[1]}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/Image/Fav.png"/>
            </Head>
            {flip ? <Nav/> : <NavMobile/>}
            {props.children}
        </>
    );
};

export default MainContainer;

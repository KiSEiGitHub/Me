import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewNav from './New_Nav';

const MainContainer = (props) => {
    
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Tom - {router.asPath}</title>
                <meta name = "viewport" content = "width=device-width, initial-scale=1.0" />
                <link rel = "icon" href = "/Image/Fav.png" />
            </Head>
            {/*<Navbar />*/}
            <NewNav />
            {props.children}
        </>
    );
};

export default MainContainer;

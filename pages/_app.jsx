import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Theme/Theme';
import MainContainer from '../components/Main-Container';
import { AnimatePresence } from 'framer-motion';
import Layout from '../Layout/articles';
import CustomCursor from '../components/CustomCursor';
import Reserved from '../components/Reserved';
import ContexteProvider from '../Hook/ContextProvider';

function MyApp({ Component, pageProps, router }) {
    return (
        
        <ChakraProvider theme = {theme}>
            <ContexteProvider>
                <MainContainer>
                    <CustomCursor />
                    <AnimatePresence exitBeforeEnter initial = {true}>
                        <Layout key = {router.route}>
                            <Component {...pageProps} />
                        </Layout>
                    </AnimatePresence>
                    <Reserved />
                </MainContainer>
            </ContexteProvider>
        </ChakraProvider>
    
    );
}

export default MyApp;

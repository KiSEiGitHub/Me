import { ChakraProvider } from '@chakra-ui/react';
import theme from '../Theme/Theme';
import MainContainer from '../components/Main-Container';
import { AnimatePresence } from 'framer-motion';
import Layout from '../Layout/articles';
import LanguageContext from '../Hook/LangContext';
import CustomCursor from '../components/CustomCursor';
import ContextText from '../Hook/TextContext';
import Reserved from '../components/Reserved';
import FunctionCon from '../Hook/FunctionContext';

function MyApp({ Component, pageProps, router }) {
    return (
        
        <ChakraProvider theme = {theme}>
            <LanguageContext>
                <FunctionCon>
                    <ContextText>
                        <MainContainer>
                            <CustomCursor />
                            <AnimatePresence exitBeforeEnter initial = {true}>
                                <Layout key = {router.route}>
                                    <Component {...pageProps} />
                                </Layout>
                            </AnimatePresence>
                            <Reserved />
                        
                        </MainContainer>
                    </ContextText>
                </FunctionCon>
            </LanguageContext>
        </ChakraProvider>
    
    );
}

export default MyApp;

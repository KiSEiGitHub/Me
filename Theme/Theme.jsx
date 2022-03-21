import {extendTheme, useColorMode} from '@chakra-ui/react';
import {createBreakpoints, darken, mode, whiten} from '@chakra-ui/theme-tools';

function ScrollBack() {
    const {colorMode} = useColorMode();
    if (colorMode === 'light') {
        return '#ead9b9';
    } else if (colorMode === 'dark') {
        return '#313134';
    }
}

const styles = {
    global: props => ({
        html: {
            fontSize: {sm: '100%', md: '110%', lg: '115%', xl: '117%'}
        },
        body: {
            bg: mode('#f0e7db', '#202023')(props),
            fontFamily: '@import url(\'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap\');',
            '&::-webkit-scrollbar': {
                width: 2,
                borderRadius: '20px',
                d: 'none'
            },
            '&::-webkit-scrollbar-track': {
                borderRadius: '20px'
            },
            '&::-webkit-scrollbar-thumb': {
                background: ScrollBack,
                borderRadius: '24px',
            }
        }
    })
};

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                fontFamily: 'M PLUS Rounded 1c'
            },
            'sous-title': (props) => ({
                color: mode('#1a202c', '#ffffff')(props),
                fontSize: '1.2em',
                fontFamily: 'M PLUS Rounded 1c'
            }),
            'baseText': (props) => ({
                color: mode('#1a202c', '#ffffff')(props),
                fontSize: '1.2em',
                fontFamily: 'M PLUS Rounded 1c'
            })
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
            fontFamily: 'M PLUS Rounded 1c'
        })
    },
    Container: {
        variants: {
            Main: {
                mt: '60px',
                p: '0 35px'
            },
            'Main-Projet': {
                mt: '100px',
                p: '0 35px',
                W: '820px',
            },
            'Proj': {
                maxW: '100%',
                h: 'auto',
                mt: '100px',
            },
            WithShadow: (props) => ({
                boxShadow: ' rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
                w: '412px',
                h: '380px',
                p: '20px',
                borderRadius: '10px',
                pos: 'relative',
                backgroundColor: mode('#f5f0e8', '#313134')(props),
                m: '10px 10px'
            }),
            'Container-Flex': {
                w: '220px',
                h: '150px',
                bg: 'blue',
                borderRadius: '25px',
                p: '10px',
                m: '10px'
            },
            'Projet': {
                mt: '100px',
                w: {sm: '350px', md: '650px', lg: '800px', xl: '950px'},
            }
        }
    },
    Button: {
        variants: {
            ButtonLike: (props) => ({
                bg: mode('#319694', '#81e6d9')(props),
                margin: '5px 2px',
                color: mode('#ffffff', '#1a202c')(props),
                fontFamily: 'M PLUS Rounded 1c',
                h: {sm: 8, md: 8, lg: 9, xl: 9},
                fontSize: '0.9em',
                _hover: {
                    bg: mode(darken('#319694', 10), whiten('#81e6d9', 10))(props),
                }
            }),
        }
    },
    Text: {
        baseStyle: (props) => ({
            color: mode('#56575d', '#e5e5e5')(props),
            fontFamily: 'M PLUS Rounded 1c'
        }),
        variants: {
            ParaIndent: {
                textAlign: 'justify',
                textIndent: 15,
                fontSize: '1em',
                lineHeight: '150%',
                letterSpacing: '0.02em',
            },
            Para: {
                textAlign: 'justify',
                fontSize: '1em',
                lineHeight: '150%',
                letterSpacing: '0.02em',
            },
            ParaNoJus: {
                fontSize: '1em',
                lineHeight: '150%',
                letterSpacing: '0.02em'
            },
            ProjetLink: (props) => ({
                color: mode('#3d7aed', '#ff63c3')(props),
                fontSize: '1em'
            }),
            Link: {
                d: 'inline',
                fontSize: {sm: '1.1em', md: '1em'}
            },
            FirstPara: {
                p: 3,
                textAlign: 'center',
                textIndent: 15,
                fontSize: '1em'
            },
            'Me': {
                fontSize: {sm: '2em', md: '3em'}
            },
            'section-title': {
                textDecoration: 'underline',
                textUnderlineOffset: 10,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
                fontSize: '1.5em'
            }
        }
    }

};

const fonts = {
    heading: '\'M PLUS Rounded 1c\''
};

const breakpoints = createBreakpoints({
    sm: '320px',
    md: '780px',
    lg: '1024px',
    xl: '1440px'
});

const color = {
    grassTeal: '#88ccca'
};

const theme = extendTheme({styles, components, fonts, breakpoints});
export default theme;
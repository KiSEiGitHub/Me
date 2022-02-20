import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Section = ({ children, delay = 0 }) => (
    
    <MotionBox
        initial = {{ y : 10, opacity : 0 }}
        animate = {{ y : 0, opacity : 1 }}
        transition = {{ duration : 0.4, delay }}
        mb = {10}
    >
        {children}
    
    </MotionBox>

);

export default Section;
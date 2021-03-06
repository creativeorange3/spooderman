/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { LearnMore } from 'components/link';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure" style={{width: '30%'}}>
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box style={{display: 'flex', alignItems: 'center', paddingTop: '10px'}}>
        <Heading as="h3">{data?.title}</Heading>
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    display: ['flex'],
    figure: {
      minWidth: [70],
      mr: ['30px'],
    },
    h3: {
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px',
    },
    p: {
      fontSize: 16,
      lineHeight: 1.88,
      color: 'text',
    },
    a: {
      mt: [3],
    },
  },
};

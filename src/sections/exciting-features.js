/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import feature from 'assets/images/gentleman.png';
import roadmap from 'assets/images/roadmap.png'
import detroadmap from 'assets/images/detroadmap.png'
import emoji from 'assets/images/icons/emoji-2.png';


const ExcitingFeatures = () => {
  return (
    <Box as="section" id="roadmapz" variant="section.workHard">      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Image src={roadmap} /><br />
      <Image src={detroadmap} /><br />
    </Container>
    </Box>
  );
};

export default ExcitingFeatures;

const styles = {
  contentWrapper: {
    fontWeight: 'bold',
    // gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid', 'flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexDirection: ['column-reverse'],
    paddingBottom: [0, 0, 0, 0, '50px']
  },
  illustration: {
    fontWeight: 'bold',
    display: ['none', 'none', 'block'],
    img: {
      maxWidth: '500px'
    }
  },
  heading: {
    fontWeight: 'bold',
    maxWidth: [295, 295, 495, 495, 410, 500],
    textAlign: ['center', null, null, null, 'left'],
    mb: [30],
    ml: ['auto', null, null, null, 0],
    h2: {
      fontSize: ['28px', '28px', '28px', '36px', '32px', '36px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
  },
  accordionGroup: {
    fontWeight: 'bold',
    maxWidth: ['none', null, null, 600, 'none'],
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: [
        '20px 30px',
        '20px 30px',
        '30px 45px',
        '20px 25px 20px',
        '30px 45px',
        '20px 35px',
      ],
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};

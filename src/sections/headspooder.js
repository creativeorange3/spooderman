/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Link } from 'theme-ui';
import banner from 'assets/images/banner.png'
import krypto from 'assets/images/krypto.png'
import homeNav from 'assets/images/nav/home-nav.png'
import tokenomicsNav from 'assets/images/nav/tokenomics-nav.png'
import featuresNav from 'assets/images/nav/features-nav.png'
import roadmapNav from 'assets/images/nav/roadmap-nav.png'
import { Link as MenuLink } from 'react-scroll';

const Headspooder = () => {
  return (
    <Box as="section" id="roadmap" variant="section.faq">
      <Container style={{ paddingTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Image src={banner} />
        <div sx={styles.navgaton}>
          <div style={{ paddingTop: '20px', display: 'flex' }}>

            <MenuLink
              to={'home'}
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
            ><Image src={homeNav} />
            </MenuLink>
            <MenuLink
              to={'tokenomics'}
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
            ><Image src={tokenomicsNav} />
            </MenuLink>
            <MenuLink
              to={'features'}
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
            ><Image src={featuresNav} />
            </MenuLink>
            <MenuLink
              to={'roadmapz'}
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
            ><Image src={roadmapNav} />
            </MenuLink>
          </div>
          <Image src={krypto} />
        </div>

      </Container>
    </Box>
  );
};

export default Headspooder;

const styles = {
  navgaton: {
    display: 'flex',
    flexDirection: ['column', 'column', 'row', 'row', 'row'],
    px: 30
  },
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

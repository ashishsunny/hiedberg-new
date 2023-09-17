/** @jsxImportSource theme-ui */
import { Heading, Box, Text, Flex, Container } from 'theme-ui';
import  {LinkA}  from '../../components/link';
import Link from 'next/link';
import menuItems from './footer.data';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';
import Logo from '../../components/logo';


const FooterLogo = require('../../public/assets/images/logo-blue-hiedberg.svg');
export default function Footer() {
  return (
    <ThemeUIProvider theme={theme}>
    <footer sx={styles.footer} style={{ background: "linear-gradient(to bottom, #E5F1FF, #fff)"}}>
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.footerTopArea}>
          <Box sx={styles.copyrightArea}>
            <Box className="footer__logo">
              <Logo src={FooterLogo} />
            </Box>
            <nav className="footer__menu">
              <LinkA path="/" label="Copyright ©2023 Hiedberg Consulting" />
            </nav>
            <Text as="p" sx={styles.copyrightArea.copyright}>
            Website Developed by ashishsunny.dev
            </Text>
          </Box>
          <Flex sx={styles.footer.menuArea}>
            {menuItems &&
              menuItems.map(({ header, items }, i) => (
                <Box sx={styles.footer.menus} key={i}>
                  <Heading sx={styles.footer.heading}>{header}</Heading>
                  <nav>
                    {items.map(({ path, label, name, icon }, i) => (
                      <LinkA
                        className={name}
                        key={i}
                        sx={styles.footer.link}
                      >
                        {icon}
                        {label}
                      </LinkA>
                    ))}
                  </nav>
                </Box>
              ))}
          </Flex>
        </Box>
      </Container>
    </footer>
    </ThemeUIProvider>
  );
}

const styles = {
  footer: {
    container: {
      width: '100%',
      alignItems: 'stretch',
    },
    footerTopArea: {
      display: 'flex',
      flexWrap: 'wrap',
      pt: ['60px', null, null, null, 8],
      pb: [7, null, null, null, '30px'],
      pl: [0, null, 4, 6, null, 7],
      pr: [0, null, 4, 6],
    },
    menuArea: {
      width: [
        '100%',
        null,
        null,
        null,
        'calc(100% - 250px)',
        'calc(100% - 300px)',
      ],
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      pb: 3,
    },
    menus: {
      display: 'flex',
      flexDirection: 'column',
      mb: ['45px', null, null, '50px', '60px'],
      pr: 3,
      width: ['50%', null, null, '25%'],
    },

    heading: {
      fontSize: [2, 3],
      color: 'heading',
      fontWeight: 'heading',
      litterSpacing: 'heading',
      mb: [4, null, null, null, 5, 6],
      lineHeight: '1.35',
    },

    link: {
      fontSize: ['14px', 1],
      color: 'text_secondary',
      fontWeight: 'body',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.9],
      svg: {
        width: '17px',
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
      '&.facebook > svg': {
        color: '#3B5998',
      },
      '&.twitter > svg': {
        color: '#55ACEE',
      },
      '&.linkedin > svg': {
        color: '#E74D89',
      },
      ':hover': {
        color: 'primary',
      },
      ':last-child': {
        mb: '0px',
      },
    },
  },
  copyrightArea: {
    width: ['100%', null, null, null, '250px', '300px'],
    flexShrink: 0,
    order: [2, null, null, null, 0],
    textAlign: ['center', null, null, null, 'left'],
    '.footer__logo': {
      a: {
        mr: 0,
        img: {
          mx: ['auto', null, null, null, 0],
        },
      },
    },
    '.footer__menu': {
      display: 'flex',
      justifyContent: ['center', null, null, null, 'flex-start'],
      flexWrap: 'wrap',
      mt: [3, null, null, null, 4],
      a: {
        fontSize: ['14px', 1],
        color: 'text_secondary',
        fontWeight: 'body',
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.35s',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.9],
        ':before': {
          px: 2,
          content: '"|"',
          color: 'text_secondary',
        },
        ':first-of-type:before': {
          display: 'none',
        },
        ':hover': {
          color: 'primary',
        },
      },
    },
    copyright: {
      fontSize: ['14px', 1],
      color: '#6D7886',
      pt: 1,
    },
  },
};

/** @jsxImportSource theme-ui */
import { useState } from 'react'
import {
  jsx,
  Container,
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from 'theme-ui'
import { ThemeUIProvider } from 'theme-ui'
import theme from '../../theme'
import Phone from '../../components/phone'
import TypewriterComponent from '../../components/typewriter'


export default function Hero2() {
  return (
    <ThemeUIProvider theme={theme}>
      <section sx={styles.banner}>
        <Container sx={styles.banner.container}>
          <Box sx={styles.banner.contentBox}>
            <Heading as="h1" variant="heroPrimary">
            <TypewriterComponent text="Innovative ideas deserve a chance to reach their potential..." />
            </Heading>

            <Text as="p" variant="heroSecondary">
              Our commitment to providing the best possible service and
              delivering measurable results means that we work closely with our
              clients to understand their unique organisational goals, and
              tailor our analysis and insights to meet those needs.
            </Text>
            <Flex>
              <Button variant="whiteButton" aria-label="Get Started">
                Contact Us
              </Button>
              <></>
            </Flex>
          </Box>

          <Box sx={styles.banner.imageBox}>
            <Phone />
          </Box>
        </Container>
      </section>
    </ThemeUIProvider>
  )
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url("/assets/bannerBg.png")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
}

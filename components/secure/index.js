/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import TextFeature from '../text-feature';
import Image from '../image';
import theme from '../../theme';
import { ThemeUIProvider } from 'theme-ui';
const data = {
  subTitle: 'OUR COMMITMENT',
  title: 'We strive to support data-driven decisions by providing accurate, actionable, and real-time insights for our clients & partners',
  description:
    'Our mission at Hiedberg is to empower organizations to succeed by providing world-class data analysis and business insights using innovative AI across all project management areas…',
  btnName: 'Connect with us',
  btnURL: '#',
};

export default function SecurePayment({page}) {
const PaymentThumb = '/assets/data_analytics.svg'
const PaymentThumb2 = '/assets/data.svg'
  return (
    <ThemeUIProvider theme={theme}>
    <section sx={{ variant: 'section.securePayment' }}>
      <Box sx={styles.bgOverlay} />
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={page === 'about' ? PaymentThumb2 : PaymentThumb} alt={data.title} />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
    </ThemeUIProvider>
  );
}

const styles = {
  bgOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: -1,
    width: [
      '100%',
      null,
      null,
      'calc(50% + 400px)',
      'calc(50% + 480px)',
      'calc(50% + 570px)',
      null,
      'calc(50% + 625px)',
    ],
    backgroundImage: `url("/assets/payment-pattern.png")`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
  },
  containerBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    mb: -2,
    ml: [-4, '-40px', null, null, 0],
    order: [2, null, null, 0],
    pr: [6, null, 7, 0],
  },
  contentBox: {
    width: ['100%', 420, 480, 380, 500, 570],
    mx: 'auto',
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    pt: [0, null, null, 4, '50px', null, 4, '80px'],
    pl: [0, null, null, 40, '90px'],
    pb: [7, null, null, 9],
    pr: [0, null, null, null, null, 6],
  },
};

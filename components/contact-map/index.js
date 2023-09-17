/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import TextFeature2 from '../text-feature2';
import Image from '../image';
import GoogleMapEmbed from '../location';


const data = {
  subTitle: 'WE ARE HERE FOR YOU',
  title: 'Questions? Call us directly!',
  description:
    'Our mission at Hiedberg is to empower organisations to succeed by providing world-class data analysis and business insights using innovative AI across all project management areas...',
  btnName: 'Call Us at +233 (0) 234759931',
  btnURL: '#',
};

export default function PartnerSection() {
const Partner = '/assets/partner.svg'
  return (
    <section sx={{ variant: 'section.partner' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature2
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={{ px: [0, null, '40px', 0] }}>
          <GoogleMapEmbed />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', 450, 550, '350px', '410px', '485px'],
    mx: 'auto',
    pb: ['30px', null, null, 0],
    '.description': {
      pr: [0, null, null, null, 4],
    },
  },
};

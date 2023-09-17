/** @jsxImportSource theme-ui */
import { Container, Box } from 'theme-ui';
import TextFeature2 from '../../components/text-feature2';
import Image from '../../components/image';


const data = {
  subTitle: 'Data Driven, Actionable Impact',
  title: 'About Hiedberg',
  description:
    'Hiedberg acknowledges that behind every development project is a human narrative. As a result, we choose dynamic development partnerships in which beneficiaries are central to our activities. Our people-centred strategy, built on our key areas of expertise, ensures that the projects we embark on maximise results in terms of socially inclusive growth, as well as long-term and demonstrable impact on people’s lives. At Hiedberg, we fully embrace interacting and entering into dialogue with donors, NGOs, government agencies and experts during our missions and, using the results from our assignments to influence the development of new innovative technical proposals. To ensure the programs we implement have lasting impact in terms of economic growth, sustainability, and poverty reduction, we target structural reforms and capacity building in four core sectors. Using cutting-edge AI technologies, Hiedberg is quickly establishing itself as a leader in providing project management and global development cooperation using data analysis and business insights to help organisations make sense of their data and gain valuable insights that can inform strategic decisions. Our young but experienced team of experts in data science and AI have extensive experience in working with various types of data and industries analyzing large amounts of data quickly and accurately and identify patterns and trends that would be difficult or impossible for a human to detect. We provide our clients with real-time insights, reports, and visualizations that can help them understand their customers, identify new opportunities, and improve their overall performance. Our commitment to providing the best possible service and delivering measurable results means that we work closely with our clients to understand their unique organizational needs and goals, and tailor our analysis and insights to meet those needs.',
  btnURL: '#',
};

export default function PartnerSection() {
const Partner = '/assets/partner.svg'
  return (
    <section sx={{ variant: 'section.partner' }} style={{ backgroundImage:"url(/assets/bannerBg.png)"}}>
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
          <Image  src={Partner} alt="Partner" />
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
    subTitle: {
      fontSize: [0, null, '12px'],
      color: 'heading',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, null, null, null, 3],
      lineHeight: 1.5,
    },
  },
};

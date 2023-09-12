/** @jsxImportSource theme-ui */
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../../components/section-header';
import theme from '../../theme';
import { ThemeUIProvider } from 'theme-ui';
import FeatureCard from '../../components/feature-card'


const Web = '/assets/feature/web-dev.svg'
const Admin = '/assets/feature/admin-services.svg'
const pm = '/assets/feature/project-management.svg'
const consulting = '/assets/feature/consulting.svg'
const data = [
  {
    id: 1,
    imgSrc: Web,
    altText: 'Custom web development',
    title: 'Custom web development',
    text:
      'We design and develop custom web applications that meet your specific needs. Our team of experienced web developers can help you with everything from creating a simple landing page to developing a complex e-commerce platform. We understand that every business is different, and we tailor our services to meet your individual requirements.',
  },
  {
    id: 2,
    imgSrc: Admin,
    altText: 'Administerial Services',
    title: 'Administerial Services',
    text:
      'We provide a variety of administrative services to help you free up time and focus on your core business activities. These services include:Virtual assistant services: We can provide you with a virtual assistant to handle tasks such as scheduling appointments, managing your email, and responding to customer inquiries.Bookkeeping and accounting: We can help you with your bookkeeping and accounting needs, so you can stay on top of your finances',
  },
  {
    id: 3,
    imgSrc: pm,
    altText: 'Project Management',
    title: 'Project Management',
    text:
      'We help you manage your projects from start to finish, ensuring that they are completed on time, within budget, and to the required standards. Our project managers have extensive experience in a variety of industries and can help you with any type of project, big or small. ',
  },
  {
    id: 4,
    imgSrc: consulting,
    altText: 'Digital & Research Consulting',
    title: 'Digital & Research Consulting',
    text:
      'We provide consulting services on a wide range of digital and research topics, including: Website design and development: We can help you design and develop a website that meets your business needs and objectives. Search engine optimization (SEO): We can help you improve your websites ranking in search engines, so that more potential customers can find you.',
  }
];

export default function Feature() {
  return (
    <ThemeUIProvider theme={theme}>
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Our Services"
          title="Professional services that won’t break the bank!"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
    </ThemeUIProvider>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '30px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};

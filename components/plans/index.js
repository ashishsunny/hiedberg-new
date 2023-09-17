/** @jsxImportSource theme-ui */
import { Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import theme from '../../theme';
import { ThemeUIProvider } from 'theme-ui';

const PatternBG = 'assets/patternBG.png';
const packages = [
  {
    isWhite: false,
    name: 'Starter',
    description: 'For the busy individual',
    priceWithUnit: '£320',
    buttonText: 'Purchase Plan',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '10 mins response time',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Entirely managed',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Onboarding support',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Web Apps & Texts',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Dedicated assistant',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Customer success manager',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Priority turnaround',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Monthly reviews',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Direct phone line',
        isAvailable: false,
      }, 
      {
        icon: <IoIosCloseCircle />,
        text: 'Rollover unused credits',
        isAvailable: false,
      }, 
    ],
  },
  {
    isWhite: true,
    name: 'Business',
    description: 'For your business',
    priceWithUnit: '£600',
    buttonText: 'Purchase Plan',
    header:'Recommended',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '10 mins response time',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Entirely managed',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Onboarding support',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Web Apps & Texts',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Dedicated assistant',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Customer success manager',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Priority turnaround',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Monthly reviews',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Direct phone line',
        isAvailable: false,
      }, 
      {
        icon: <IoIosCloseCircle />,
        text: 'Rollover unused credits',
        isAvailable: false,
      }, 
    ],
  },
  {
    isWhite: true,
    name: 'Premium',
    description: 'For the premium user',
    priceWithUnit: '£915',
    buttonText: 'Purchase Plan',
    header:'Recommended',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '10 mins response time',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Entirely managed',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Onboarding support',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Web Apps & Texts',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Dedicated assistant',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Customer success manager',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Priority turnaround',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Monthly reviews',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Direct phone line',
        isAvailable: true,
      }, 
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Rollover unused credits',
        isAvailable: true,
      }, 
    ],
  },

];
export default function Plans() {
  return (
    <ThemeUIProvider theme={theme}>
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="CHOOSE THE PERFECT PLAN FOR YOU"
          slogan="Supercharge your productivity & work smarter."
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
    </ThemeUIProvider>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};

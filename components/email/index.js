/** @jsxImportSource theme-ui */
import { Container, Flex, Box, Button, Input, Text, Heading } from 'theme-ui';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';
export default function Email() {

  return (
    <ThemeUIProvider theme={theme}>
    <section>
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Schedule a Call
            </Heading>
            <Text as="p" sx={styles.description}>
            The Hiedberg team is ready to answer all your questions regarding Project Management, Business Insights, Data Analysis, and Software Developments for your organisation.
            </Text>
            <form >
              <Flex sx={styles.subscribeForm}>
                <label htmlFor="email" sx={{ variant: 'styles.srOnly' }}>
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
                <Button
                  type="submit"
                  className="subscribe__btn"
                  aria-label="Subscribe"
                >
                  { 'GO'}
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
    </ThemeUIProvider>
  );
}

const styles = {
  contentBox: {
    backgroundColor: 'primary',
    textAlign: 'center',
    borderRadius: 10,
    py: ['60px', null, 8],
  },
  contentBoxInner: {
    width: ['100%', null, '540px', '600px'],
    mx: 'auto',
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
    color: 'white',
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: '700',
    letterSpacing: ['-.5px', null, '-1.5px'],
    mb: [2, 3],
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    color: 'white',
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  subscribeForm: {
    mt: [6, null, null, 7],
    backgroundColor: ['transparent', 'white'],
    borderRadius: [0, 50],
    overflow: 'hidden',
    p: [0, 1],
    flexDirection: ['column', 'row'],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: 'body',
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'heading',
      py: 1,
      px: [4, null, 6],
      backgroundColor: ['white', 'transparent'],
      height: ['52px', null, '60px'],
      textAlign: ['center', 'left'],
      '&:focus': {
        boxShadow: '0 0 0 0px',
      },
      '::placeholder': {
        color: 'primary',
        opacity: 1,
      },
    },
    '.subscribe__btn': {
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ['text', 'primary'],
      mt: [2, 0],
      py: ['15px'],
    },
  },
};

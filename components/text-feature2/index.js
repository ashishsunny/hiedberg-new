/** @jsxImportSource theme-ui */
import {  Box, Heading, Text, Button, Link } from 'theme-ui';

export default function TextFeature2({
  subTitle,
  title,
  description,
  btnName,
  btnURL = '#',
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper} style={{paddingTop:"4rem"}}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {btnName && (
        <Link href={btnURL} variant="default">
          <Button variant="primary" aria-label={btnName}>
            {btnName}
          </Button>
        </Link>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: ['32px', null, '30px', '30px', '34px', '40px', null, '44px'],
      color: 'heading_secondary',
      lineHeight: [1.35, null, null, 1.3, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
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
  description: {
    textAlign: "justify",
    fontSize: ['14px', 1, null, null, null, '16px', null, 2],
    fontWeight: 400,
    lineHeight: [1.6, null, null, 1.4, null, '1.8'],
    color: 'text_secondary',
    mb: '30px',
  },
};

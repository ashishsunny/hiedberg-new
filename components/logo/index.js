/** @jsxImportSource theme-ui */
import Image from 'next/image';
import { LinkA } from '../../components/link';

export default function Logo({ src, ...rest }) {
  return (
    <LinkA
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image style={{width:"auto", height:"2rem"}} src={src} alt="hiedberg landing logo" width={150} height={150} />
    </LinkA>
  );
}
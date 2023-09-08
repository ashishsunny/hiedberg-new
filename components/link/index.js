import {NavLink as MenuLink, Link as A} from 'theme-ui'
import Link from 'next/link'

export function NavLink({ path, label, children, ...rest }) {
    return (
      <Link href={path}>
        <MenuLink {...rest}>{children ? children : label}</MenuLink>
      </Link>
    );
  }
  export function LinkA({ path, label, children, ...rest }) {
    return (
      <A {...rest} href={path}>
        {children ? children : label}
      </A>
    );
  }
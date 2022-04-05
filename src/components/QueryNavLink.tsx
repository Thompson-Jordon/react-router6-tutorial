import { useLocation, NavLink } from 'react-router-dom'


type AnyCompProps = React.ComponentProps<typeof NavLink>

export const QueryNavLink = ({ to, ...props }: AnyCompProps) => {
  let location = useLocation()
  return <NavLink to={to + location.search} {...props} />
}

import { Link, useResolvedPath, useMatch } from 'react-router-dom'

function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link
        className={`nav-link ${match ? 'active' : ''}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

export default CustomLink
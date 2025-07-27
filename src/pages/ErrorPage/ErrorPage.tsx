import { Link, useRouteError } from 'react-router'

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>ErrorPage</h1>
      <pre>
        {JSON.stringify(error)}
      </pre>
      <Link to="/">Go Home</Link>
    </div>
  )
}

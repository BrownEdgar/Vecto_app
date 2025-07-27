import { Link, useRouteError } from 'react-router'
import './ErrorPage.scss'
export default function ErrorPage() {
  const error = useRouteError();
  console.log("error", JSON.stringify(error));

  return (
    <div className='ErrorPage' style={{ backgroundImage: `url(./images/404.jpg)` }}>
      <Link to="/">Go Home</Link>
    </div>
  )
}

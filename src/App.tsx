import { RouterProvider, createBrowserRouter } from 'react-router'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import './App.scss'

function App() {
  const componentRoutes = [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]
  const router = createBrowserRouter(componentRoutes)
  return <RouterProvider router={router} />
}

export default App

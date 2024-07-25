import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import "../App.css"
import { Counter } from "../features/counter/Counter"
import ErrorPage from "./error-page"
import { useState } from "react"
import { Quotes } from "../features/quotes/Quotes"

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "Counter",
      element: <Counter />,
    },
    {
      path: "Quotes",
      element: <Quotes />,
    },
  ])

  return <RouterProvider router={router} />
}

const Home = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Counter">Counter</Link>
              </li>
              <li>
                <Link to="/Quotes">Quotes</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Router

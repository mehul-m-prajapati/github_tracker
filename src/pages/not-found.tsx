import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
        <h1 className="text-4xl font-bold dark:text-red-500">404</h1>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">Page not found</p>
        <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Go back to home</Link>
    </div>
  )
}

export default NotFound

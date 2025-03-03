import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components/imports"
const Layout = () => {
  return (
    <div>
      <Navbar />
      <section>{<Outlet />}</section>
      <section><Footer /></section>
    </div>
  )
}

export default Layout
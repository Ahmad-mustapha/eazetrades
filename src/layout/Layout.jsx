import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components/imports"
const Layout = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-[5.5rem]">{<Outlet />}</section>
      <section><Footer /></section>
    </div>
  )
}

export default Layout
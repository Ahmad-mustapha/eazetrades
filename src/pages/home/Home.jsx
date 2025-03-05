import { Hero, Footer, Categories } from "../../components/imports"
import { Searchbar } from "@/components/hero/Hero"
const Home = () => {
  return (
    <div>
      <Hero />
      <section className='flex items-center justify-center'><Searchbar /></section>
      <Categories />
    </div>
  )
}

export default Home
import { Hero, Footer, Categories, Relatedsearch, Trendingproducts, Testimonials } from "../../components/imports"
import { Searchbar } from "@/components/hero/Hero"
const Home = () => {
  return (
    <div>
      <Hero />
      <section className='flex items-center justify-center'><Searchbar /></section>
      <Categories />
      <Relatedsearch />
      <Trendingproducts />
      <Testimonials />
    </div>
  )
}

export default Home
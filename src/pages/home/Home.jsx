import { Hero, Footer, Categories, Relatedsearch, Trendingproducts, Testimonials } from "../../components/imports"
import { Searchbar } from "@/components/hero/Hero"
const Home = () => {
  return (
    <div>
      <Hero />
      <section className='flex items-center justify-center'><Searchbar /></section>
      <Categories />
      <div>
        <div className="text-center">
          <h1 className="font-semibold text-[32px] md:text-5xl mb-10 text-[#000000]">Related Searches</h1>
        </div>
        <Relatedsearch />
      </div>
      <Trendingproducts />
      <Testimonials />
    </div>
  )
}

export default Home
import Videoslider from "./Videoslider"
const Categories = () => {
  return (
    <section className='px-10 py-28 bg-[#F9F7FF]'>
        <h2 className='text-[#333333] font-[600] text-[30px] md:text-[40px]'>Browse by categories</h2>
        <div className="mt-10 overflow-x">
            <Videoslider />
        </div>
    </section>
  )
}

export default Categories
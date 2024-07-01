import Slider from "@/components/slider"
import SectionWrapper from "@/section/SectionWrapper"

const Testimonials = () => {
  return ( 
    <div className="flex flex-col h-[100vh] xs:mx-auto bg-white">
      <Slider />
    </div>
  )
}
export default SectionWrapper(Testimonials, "testimonials")
import Slider from "@/components/slider"
import SectionWrapper from "@/section/SectionWrapper"

const Testimonials = () => {
  return ( 
    <div className="flex flex-col gap-8 lg:py-8 w-full bg-white mx-auto">
      <Slider />
    </div>
  )
}
export default SectionWrapper(Testimonials, "testimonials")
import Slider from "@/components/slider"
import SectionWrapper from "@/section/SectionWrapper"

const Testimonials = () => {
  return (
    <div className="flex flex-col h-screen justify-around bg-quinary">
      <Slider />
    </div>
  )
}
export default SectionWrapper(Testimonials, "testimonials")
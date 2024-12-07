import { Carousel } from "flowbite-react";
import Image from "next/image";

const MultiSlider = () => {
    const testimonials = [
        {
            id: 1,
            image: "https://d3e25fyg0500ti.cloudfront.net/Testimonial+Templates/Digitalism+Testimonial+2.webp"
        },
        {
            id: 2,
            image: "https://d3e25fyg0500ti.cloudfront.net/Testimonial+Templates/Digitalism+Testimonial+3.webp"
        },
        {
            id: 3,
            image: "https://d3e25fyg0500ti.cloudfront.net/Testimonial+Templates/Digitalism+Testimonial+4.webp"
        },
        {
            id: 4,
            image: "https://d3e25fyg0500ti.cloudfront.net/Testimonial+Templates/Digitalism+Testimonial+1.webp"
        },
    ];

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    return (
        <>
            {/* ----------------------------------------------- 2xl xl lg ----------------------------------------------------------------------- */}

            <div className="h-full 2xl:h-full lg:flex xl:flex 2xl:flex md:hidden sm:hidden xs:hidden">
                <Carousel slideInterval={2000}>
                    {chunkArray(testimonials, 2).map((testimonialChunk, index) => (
                        <div key={index} className="flex gap-10 justify-around rounded-3xl">
                            {testimonialChunk.map((testimonial) => (
                                <div key={testimonial.id} className="2xl:w-1/3 xl:w-96 lg:w-96 rounded-3xl">
                                    <div className="mb-3 w-full h-full flex justify-center">
                                        <Image width={600} height={600} loading="lazy" className="w-full h-full rounded-3xl" src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* ----------------------------------------------- md sm xs ----------------------------------------------------------------------- */}
            
            <div className="w-full h-3/4 px-5 py-10 2xl:h-full md:flex sm:flex xs:flex 2xl:hidden xl:hidden lg:hidden">
                <Carousel slideInterval={2000}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col items-center">
                            <Image width={500} height={500} loading="lazy" className="w-3/4 h-full rounded-3xl object-cover" src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default MultiSlider;

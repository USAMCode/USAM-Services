import { Carousel } from "flowbite-react";

const MultiSlider = () => {
    const testimonials = [
        {
            id: 1,
            image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+2.png"
        },
        {
            id: 2,
            image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+3.png"
        },
        {
            id: 3,
            image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+4.png"
        },
        {
            id: 4,
            image: "https://usam-services.s3.ap-south-1.amazonaws.com/Testimonial+Templates/Digitalism+Testimonial+1.png"
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
                                        <img className="w-full h-full rounded-3xl" src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* ----------------------------------------------- md sm xs ----------------------------------------------------------------------- */}
            
            <div className="h-full w-full p-10 2xl:h-full md:flex sm:flex xs:flex 2xl:hidden xl:hidden lg:hidden">
                <Carousel slideInterval={2000}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex flex-col items-center">
                            <img className="w-3/4 h-full rounded-3xl object-cover" src={testimonial.image} alt={`Testimonial ${testimonial.id}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default MultiSlider;

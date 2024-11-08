import { useState, useTransition, useRef, useEffect } from "react";
import mainImg1 from '../../assets/carousel/desktop/w14.webp'
import mainImg2 from '../../assets/carousel/desktop/w15.webp'
import mainImg3 from '../../assets/carousel/desktop/w16.webp'
import mainImg4 from '../../assets/carousel/desktop/w17.webp'


const Carousel = () => {
    const [image, setImage] = useState(mainImg1)

    // use transition hook
    const [, startTransition] = useTransition();

    const imageRef = useRef<HTMLImageElement>(null); // ref for image
    const containerRef = useRef<HTMLDivElement>(null); // ref for container over image
    const [containerWidth, setContainerWidth] = useState(0); // ref for changing container width

    // get container width on resize event and store in containerWidth state variable
    useEffect(() => {
        const handleResize = () => {
        if (containerRef.current) {
            const newWidth = containerRef.current.clientWidth;
            setContainerWidth(newWidth);
        
        }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    })


    // on containerWidth change, calculate and update the container's height
    useEffect(() => {
        if (imageRef.current && containerWidth > 0) {
        const image = imageRef.current;
        const newHeight = containerWidth / (image.naturalWidth / image.naturalHeight);
        if (containerRef.current) containerRef.current.style.height = `${newHeight}px`;
        }
    }, [containerWidth]); 

    // change image every 10 seconds
    setTimeout(() => {
        startTransition(() =>{
        if (image === mainImg1) setImage(mainImg2)
        else if (image === mainImg2) setImage(mainImg3)
        else if (image === mainImg3) setImage(mainImg4)
        else setImage(mainImg1)
        })
    }, 10000)


    return (
        <section className="relative">
            <img src={image} ref={imageRef} alt="Image of car." className='w-[100%]' />
            <div ref={containerRef} className="w-[100%] bg-[rgba(0,0,0,0.5)] absolute top-0"></div>
            <div className="flex flex-col gap-3  absolute left-4 md:left-8 tablet:left-12 top-10 md:top-16">
                <h1  
                className='text-white text-4xl md:text-5xl tablet:text-[60px] font-bold'>
                    Let&rsquo;s Find Your Perfect Car<small className='text-[14px]'>...</small>
                </h1>
                <p className="tablet:text-lg md:block hidden tracking-wide text-white">
                    Whether it's speed, style, or comfort, we’ve got you covered.
                </p>
            </div>
        </section>
    )
}

export default Carousel
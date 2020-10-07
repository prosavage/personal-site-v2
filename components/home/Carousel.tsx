import { time } from "console";
import { ReactNode, useEffect, useState } from "react"
import { Sliders } from "react-feather";

interface CarouselProps {
    slides: ReactNode[];
    delay: number
}

export default function Carousel(props: CarouselProps) {

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const next = (current + 1) % props.slides.length;
        const nextSlideTimer = setTimeout(() => setCurrent(next), props.delay);
        return () => clearTimeout(nextSlideTimer)
    }, [current])


    return <div>{props.slides[current]}</div>;
}
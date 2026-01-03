"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
    id: string;
    description: string;
    image: string;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Trusted by these companies",
    logos = [
        {
            id: "logo-1",
            description: "OpenAI",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-2",
            description: "Anthropic",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-3",
            description: "Google",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-4",
            description: "Microsoft",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-5",
            description: "Amazon",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-6",
            description: "Meta",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
            className: "h-7 w-auto",
        },
        {
            id: "logo-7",
            description: "Tesla",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
            className: "h-7 w-auto",
        },
        {
            id: "logo-8",
            description: "Apple",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            className: "h-8 w-auto",
        },
    ],
}: Logos3Props) => {
    return (
        <section className="py-16 border-t border-white/5 relative z-10">
            <div className="container flex flex-col items-center text-center">
                <h3 className="my-6 text-sm uppercase tracking-wider text-gray-500">
                    {heading}
                </h3>
            </div>
            <div className="pt-6">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
                    <Carousel
                        opts={{ loop: true }}
                        plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
                    >
                        <CarouselContent className="ml-0">
                            {logos.map((logo) => (
                                <CarouselItem
                                    key={logo.id}
                                    className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                                >
                                    <div className="flex shrink-0 items-center justify-center px-8">
                                        <img
                                            src={logo.image}
                                            alt={logo.description}
                                            className={logo.className}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </section>
    );
};

export { Logos3 };

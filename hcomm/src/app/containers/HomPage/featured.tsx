import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IFeature } from "../../../typings/feature";
import { FeaturedCard } from "../../../components/card/featuredCard";
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../components/responsive";

import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const FeaturedSectionContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
    `}
`

const Title = styled.h2`
    ${tw`
        text-3xl
        lg:text-4xl
        text-black
        font-black
    `}
`

const FeatureCardContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10
    `}
`

export function FeatureSection() {
    const [current, setCurrent] = useState(0);

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});

    const newFeature: IFeature = {
        thumbnailSrc: () => {return faDollarSign},
        title: 'Save Some $',
        description: 'Our all-inclusive solutions require less integrations, which means less services to pay for. Which means, more budget for Taco Tuesdays.'
    }

    
    const newFeatureTwo: IFeature = {
        thumbnailSrc:() => {return faChartBar},
        title: 'Data Driven',
        description: 'We know the Contact Center industry, and using this current industry data and industry know-how we create tailor-made solutions for companies of any size.'
    }

    const newFeatureThree: IFeature = {
        thumbnailSrc: faDollarSign,
        title: 'Cloud Based',
        description: 'Becoming a remote Contact Center just got easier! Manage teams and clients efficiently with our 100% cloud-based solutions. '
    }

    const features = [
        <FeaturedCard {...newFeature} />,
        <FeaturedCard {...newFeatureTwo} />,
        <FeaturedCard {...newFeatureThree} />
    ]

    const numberOfDots = isMobile ? features.length : Math.ceil(features.length / 3);

    return (
        <FeaturedSectionContainer>
            <Title>Why HComm</Title>
            <FeatureCardContainer>
                <Carousel
                    value={current}
                    onChange={setCurrent}
                    slides={features}
                    plugins={[
                        "clickToChange",
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3,
                            }
                        }
                    ]}
                    breakpoints={{
                        640: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                }
                            ]
                        },
                        900: {
                            plugins: [
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                }
                            ]
                        },
                    }}

                />
                <Dots value={current} onChange={setCurrent} number={numberOfDots} />
            </FeatureCardContainer>
        </FeaturedSectionContainer>
    )

}
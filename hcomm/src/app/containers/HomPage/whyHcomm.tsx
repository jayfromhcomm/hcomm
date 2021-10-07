import { faChartBar, faCloud, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../../components/button";

const FeatureContainer = styled.div`
    width: 16.5em;
    min-height: 23em;
    max-height: 23em;
    box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-6
        sm:justify-between
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `}
`

const FeatureThumbnail = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }
`

const Name = styled.h3`
    ${tw`
        text-base
        font-bold
        text-purple-500
        mt-1
        mb-1
    `}
`

const TextContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3
    `}
`

const SmallText = styled.p`
    color: inherit;
    ${tw`
        inline-flex
        text-xs
        font-thin

    `}
`

const Seperator = styled.div`
    min-width: 100%;
    min-height: 1px;

    ${tw`
        flex
        bg-gray-300
        mt-5
        mb-2
    `}
`

const FeatureButton = styled(Button)`
    ${tw`
        bg-white
        border-solid
        border-2
        min-w-full
        mt-5
        text-purple-500
        rounded-md
        hover:bg-purple-500
        hover:text-white
        hover:border-solid
    `}
`

const StepIcon = styled.span`
    ${tw`
        text-gray-500
        text-5xl
        mt-5
        mb-5
    `}
`

//Container stuff

const FeaturedSectionContainer = styled.div`
    ${tw`
    w-full
        max-w-screen-2xl
        flex 
        flex-col
        items-center
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
        pt-8
        pb-8
    `}
`

const Title = styled.h2`
    ${tw`
        items-center
        text-3xl
        lg:text-4xl
        text-purple-500
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

export function WhyHcomm() {

    return(
        <FeaturedSectionContainer>
            <Title>Why HComm ?</Title>
            <FeatureCardContainer>
                {/* card one */}
                <FeatureContainer>
                    <StepIcon>
                        <FontAwesomeIcon icon={faDollarSign} />
                    </StepIcon>
                    <Name>Save Some $</Name>
                    <TextContainer>
                        <SmallText>
                        Our all-inclusive solutions require less integrations, which means 
                        less services to pay for. Which means, more budget for Taco Tuesdays.
                        </SmallText>
                    </TextContainer>
                    <Seperator />
                    <FeatureButton text='Learn More' />
                </FeatureContainer>
                {/* card two */}
                <FeatureContainer>
                    <StepIcon>
                        <FontAwesomeIcon icon={faChartBar} />
                    </StepIcon>
                    <Name>Data Driven</Name>
                    <TextContainer>
                        <SmallText>
                        We know the Contact Center industry, and using this current industry data and industry 
                        know-how we create tailor-made solutions for companies of any size.
                        </SmallText>
                    </TextContainer>
                    <Seperator />
                    <FeatureButton text='Learn More' />
                </FeatureContainer>
                {/* card three */}
                <FeatureContainer>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCloud} />
                    </StepIcon>
                    <Name>Cloud-based</Name>
                    <TextContainer>
                        <SmallText>
                        Becoming a remote Contact Center just got easier! Manage 
                        teams and clients efficiently with our 100% cloud-based solutions.
                        </SmallText>
                    </TextContainer>
                    <Seperator />
                    <FeatureButton text='Learn More' />
                </FeatureContainer>
                {/* end cards */}
            </FeatureCardContainer>
        </FeaturedSectionContainer>
    )
}
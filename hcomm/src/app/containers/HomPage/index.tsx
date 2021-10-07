import React from "react";
import styled from 'styled-components'
import tw from 'twin.macro'
import { Marginer } from "../../../components/marginer";
import { Navbar } from "../../../components/navbar";
import { FeatureSection } from "./featured";
import { TopSection } from "./topSection";
import '@brainhubeu/react-carousel'
import { WhyHcomm } from "./whyHcomm";


const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`

export function HomePage() {
    return(
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction='vertical' margin='4em' />
            {/* <FeatureSection /> */}
            <WhyHcomm />
        </PageContainer>
    )
}
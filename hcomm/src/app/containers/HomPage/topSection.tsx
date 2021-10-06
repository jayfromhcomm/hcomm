import React from "react";
import styled from 'styled-components'
import tw from 'twin.macro'

import SolutionImg from '../../../assets/Our_solution.svg'
import { Button } from "../../../components/button";

//entire section container
const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex 
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
    `}
`

// left and right containers
const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        /* relative */
        content-center
        items-center
        mt-20
        ml-60
    `}
`

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
        
    `}
`
const SpanSlogan = styled.h1`
    color: #8322D2;
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        drop-shadow
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
        
    `}
`

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`

const SVG = styled.div`
    width: auto;
    height: 10em;
    top: -5em;
    left: 5em;
    /* position: absolute; */
    display: flex;
    align-items: right;

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }
`

const ButtonContainer = styled.div`
    ${tw`
        justify-center
        ml-60
    `}
`


export function TopSection() {
    return(
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Human. <SpanSlogan>Communication.</SpanSlogan> Simplified.</Slogan>
                <Description>
                    The future of Contact Centers is upon us, and HComm gives companies
                    the tools they need to either build or upgrade existing
                    infrastructure for teams of any size.
                </Description>
                <ButtonContainer>
                <Button text='Learn More' theme="filled" />
                </ButtonContainer>
                
            </LeftContainer>
            <RightContainer>
                <SVG>
                    <img src={SolutionImg} alt='' />
                </SVG>
            </RightContainer>
        </TopSectionContainer>
    )
}
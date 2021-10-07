import React from "react";
import styled from "styled-components";
import tw from 'twin.macro'
import { IFeature } from "../../../typings/feature";
import { Button } from '../../button'


interface IFeatureProps extends IFeature {
    
}

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
        pb-4
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
        mt-2
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

export function FeaturedCard(props: IFeatureProps) {
    const { thumbnailSrc, title, description } = props;

    return(
        <FeatureContainer>
            <FeatureThumbnail>
                <img src={''} alt='' />
            </FeatureThumbnail>
            <Name>{ title }</Name>
            <TextContainer>
                <SmallText>{ description }</SmallText>
            </TextContainer>
            <Seperator />
            <FeatureButton text='Learn More' />
        </FeatureContainer>
    )
}
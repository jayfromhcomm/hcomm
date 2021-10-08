import React, {useState} from "react";
import styled from "styled-components";
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import tw from "twin.macro";
import { Cardi3D } from "../../../components/card/3D/cardi3D";
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../components/responsive";
import { Cardi3DTwo } from "../../../components/card/3D/cardi3D.2";
import { Cardi3DThree } from "../../../components/card/3D/cardi3D.3";


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
        mb-20
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



const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${tw`
        max-w-screen-lg
        w-full
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10
  `}
  
`;

const CardGang = [
    <Cardi3D />,
    <Cardi3D />,
    <Cardi3D />
]



function HomeCards() {

    // const [current, setCurrent] = useState(0);
    // const isMobile = useMediaQuery({maxWidth: SCREENS.sm});


    return(
        <FeaturedSectionContainer>
            <Title>Who is HComm?</Title>
        <CardsContainer>
            <Cardi3D />
            <Cardi3DTwo />
            <Cardi3DThree />
        </CardsContainer>
        </FeaturedSectionContainer>
        
    )
}

export default HomeCards
import React from "react";
import styled from "styled-components";
import { Marginer } from "../../marginer";


const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
 font-size: 20px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  display: flex;
  text-align: center;
  margin-left: 70px;
  margin-bottom: 1em;
  text-decoration: underline;
  text-decoration-color: #8322d2 ;
  text-decoration-thickness: 0.2rem;
`;

const SmallText = styled.span`
   font-size: 12px;
  color: #fff;
  font-weight: 700;
  /* text-transform: uppercase; */
  margin-bottom: 0.7em;
  text-align: center;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 10px 16px;
  background-color: #8322D2;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;
  min-width: auto;
  margin-bottom: 1.2em;


  &:hover {
    background-color: #fff;
    color: #8322d2;
    border: 2px solid #8322D2;
  }
`;



export function CardiDetailsThree() {

  return (
    <DetailsContainer>
        <SpacedHorizontalContainer>
        
        <MediumText>Security</MediumText>
        </SpacedHorizontalContainer>
      
      <SpacedHorizontalContainer>
        
        <SmallText>Securing your Contact Center just got easier! Manage 
                  teams and clients safely and efficiently with our standard Two Step Authentication secured and 100% cloud-based solutions.
        </SmallText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      
      <BuyButton>Learn More</BuyButton>
      
    </DetailsContainer>
  );
}
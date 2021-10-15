import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
0% {
    transform: translate(-50%, -50%) rotate(0deg);
}

100% {
    transform: translate(-50%, -50%) rotate(360deg);
}
`;
const Root = styled.div`
   width: 100px;
   height: 100px;
   display: inline-block;
   overflow: hidden;
   background: white;
   postition: relative;
`;
const ContentWrapper = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   transform: translateZ(0) scale(1);
   backface-visibility: hidden;
   transform-origin: 0 0;
`;
const Content = styled.div`
   box-sizing: content-box;
   position: absolute;
   width: 80px;
   height: 80px;
   border: 10px solid darkgray;
   border-top-color: transparent;
   border-radius: 50%;
   animation: ${rotation} 1s linear infinite;
   top: 50px;
   left: 50px;
`;
function LoadingIndicator() {
   return (
      <Root>
         <ContentWrapper>
            <Content />
         </ContentWrapper>
      </Root>
   );
}
export default LoadingIndicator;

import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  to {
    transform:rotate(360deg)
  }
`

const StyledSpinner = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 7px solid white;
  border-radius: 50%;
  border-top-color: #fd6e21;
  animation: ${spin} 1s linear infinite;
`

const Spinner = () => {
    return <StyledSpinner/>
}

export default Spinner

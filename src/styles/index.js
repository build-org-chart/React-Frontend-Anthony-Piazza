import styled from "styled-components";

export const colors = {
  white: "#FFFFFF",
  whiteLinen: "#F8E7E4",
  tuna: "#36393F",
  redDamask: "#DB6450"
};

export const FormContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #db6450;
  color: white;
  padding-top: 20px;
`;

// inside the file you're importing into
const newFormContainer = styled(FormContainer)`
    color: black;
`
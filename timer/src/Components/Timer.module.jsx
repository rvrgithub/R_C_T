import styled from "styled-components";
export const MainDiv = styled.div`
width:400px;
height: 350px;
margin: auto;
color:#7c5931;
background-color:#e3dadb;
text-align: center;
border:5px solid #7c5931;
border-radius: 15px;
`
export const Button = styled.button`
  background: white;
  color:palevioletred;
  &:hover {
    color: white; 
    background-color: palevioletred;
  }
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
`;

export const ButtonDiv = styled.div`
background-color:#ffc0c9 ;
`
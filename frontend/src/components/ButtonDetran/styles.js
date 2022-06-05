import styled from "styled-components";

export const Container = styled.div`
  height: 64vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.a`
  display: flex;
  cursor: pointer;
  width: 60%;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  > a {
    text-decoration: none;
    margin-top: 10px;
    border-radius: 5px;
    display: block;
    line-height: 40px;
    padding: 10px 5px;
    margin: 20px;
    color: #000;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    font-family: Arial;
    
  }
`;

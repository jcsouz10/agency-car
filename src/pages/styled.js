import styled from 'styled-components';

export const NameAgency = styled.h1`
  margin: 10px;  
  text-align: center;

  background-color: white;
  color: blue;
  
  opacity: 0.5;
  font-size: 50px;

  &:hover{
    opacity: 3;
    background-color: blue;
    color:white;
  }
`

export const CotainerCar = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px;
  
  background-color: white;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`

export const ColorCar = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 20%;

  background-color:${props=>props.color};

  opacity: 0.5;
  box-sizing: border-box;

  &:hover{
    opacity: 2; 
  }
`

export const InfoCar = styled.div`
  font-size: 20px;

  margin: 0 0 5px 0; 
`

export const ContainerLogin = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: blue;
  width: 400px;
  height: 400px;
`

export const InputLogin = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  margin: 0 0 10px 0;
  text-align: center;
`

export const ButtonLogin = styled.button`
  width: 100px;
  height: 50px;
  background-color: green;
  color: white;
  border:none;
  opacity: 0.9;

  &:hover {
    opacity: 1
  }
`

export const ContainerError = styled.div`
  background-color: white;

  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const MessageError = styled.div`
  font-size: 100px;
  color: black;
`

export const ContainerDashboard = styled.div` 
height: 200px;
display:flex;
justify-content: center;
align-items: center;
`
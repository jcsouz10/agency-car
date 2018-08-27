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
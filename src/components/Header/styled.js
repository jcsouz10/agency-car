import styled from 'styled-components';

export const HeaderCointaner = styled.div`
  display:flex;
  justify-content: space-between;
  color: white;
  padding: 10px 50px  0 50px;
  align-items: center;
  background-color: black;

  @media (max-width: 700px){
    flex-direction: column;
  }
`

export const InfoHeader = styled.div`
  font-size: 20px;
  opacity: 0.9;

  &:hover{
    opacity: 2;
    font-size: 25px;
    cursor: pointer;
  }

`
export const InfoContainer = styled.div`
  display:flex;
  max-width: 200px;
  flex-direction:column;
`

export const ImageHeader = styled.img`
  width: 300px;
  
`
export const InfoNamePage = styled.div`
  align-items:center;
  justify-content: center;
  display:flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
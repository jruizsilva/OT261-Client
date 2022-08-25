import styled from "styled-components";



export const Body = styled.div`

font-family: 'Roboto Condensed', sans-serif;
font-weight: 300;
font-size: 16px;

`


export const Welcome = styled.h2`
position: absolute;
width: 6rem;
height: 2rem;
left: 17rem;
top: 18rem;

@media (max-width: 768px) {
        position: absolute;
        width: 6rem;
        height: 2rem;
        left: 15rem;
        top: 18rem;
    }
    @media (max-width: 576px) {
            position: absolute;
            width: 6rem;
            height: 2rem;
            left: 1rem;
            top: 18rem;
        }

`

export const Log = styled.h1`

position: absolute;
width: 32rem;
height: 3rem;
left: 17rem;
top: 20rem;

@media (max-width: 768px) {
    position: absolute;
    width: 32rem;
    height: 3rem;
    left: 15rem;
    top: 20rem;
}
@media (max-width: 576px) {
      
    position: absolute;
    width: 32rem;
    height: 3rem;
    left: 1rem;
    top: 20rem;
    }


`
export const Img = styled.img`
position: absolute;
width: 708px;
height: 860px;
left: 890px;
top: 100px;

@media (max-width: 1290px) {
   width: 390px;
  height: 860px;
}

`


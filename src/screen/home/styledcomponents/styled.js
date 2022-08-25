import styled from "styled-components";


export const Body = styled.div`

font-family: 'Roboto Condensed', sans-serif;
font-weight: 300;
font-size: 16px;
`

export const Title = styled.div`
position: absolute;
width: 35rem;
height: 13rem;
left: 8rem;
top: 16rem;
@media (max-width: 768px) {
      position: absolute;
      width: 40rem;
      height: 40rem;
      left: 1rem;
      top: 8rem;
    }
    @media (max-width: 576px) {
          position: absolute;
          width: 20rem;
          height: 20rem;
          left: -1rem;
          top: 8rem;
        }



`


export const Homeimg = styled.div`
width: 81rem;
height: 81rem;
 position: absolute;
 left: 45rem;
 top: 22rem;
 @media (max-width: 768px) {
    width: 40rem;
     height: 40rem;
      position: absolute;
      left: 30rem;
      top: 22rem;
    }
    @media (max-width: 576px) {
        width: 20rem;
        height: 20prem;
       position: absolute;
       left: 15rem;
       top: 22rem;
    }




`
export const News = styled.p`
position: absolute;
width: 308px;
height: 48px;
left: 143px;
top: 1366px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;

color: #000000;
@media (max-width: 768px) {
    /* Últimas novedades */
        
        
    position: absolute;
    width: 5rem;
    height: 3rem;
    left:1rem;
    top: 85rem;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 3rem;
    /* identical to box height */
    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;
}
@media (max-width: 576px) {
    position: absolute;
    width: 5rem;
    height: 3rem;
    left:1rem;
    top: 85rem;
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 3rem;
    /* identical to box height */
    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.015em;

}

`

export const Containernews = styled.div`
position: absolute;
left: 110px;
top: 1440px;

@media (max-width: 768px) {
    position: relative;
    left: 1rem;
    top: 90rem;
    display:grid;
    grid-template-columns: auto auto;
}

@media (max-width: 576px) {
    position: absolute;
    left: 1rem;
    top: 90rem;
    display: inline;
}
`


export const Space = styled.div`

display: flex;
justify-content: space-between;

`

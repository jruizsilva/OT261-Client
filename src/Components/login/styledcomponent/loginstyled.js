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
height: 800px;
left: 890px;
top: 100px;

@media (max-width: 1290px) {
   width: 390px;
  height: 850px;
}

`

export const Container = styled.div`

width: 100%;
	max-width: 1300px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 15px')};
    position: absolute;
    left: -10rem;
    top: 390px;

    @media (max-width: 768px) {
  
        position: absolute;
        left: 1rem;
        top: 390px;
    }

/* Small devices (landscape phones, 576px and up) */
  @media (max-width: 576px) {
     
        position: absolute;
        left: 1px;
        top: 390px;
    
`

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;

export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	width: 451px;
    height: 56px;
	border: none;
	font-size: 1rem;
    @media (max-width: 768px) {
        height: 40px;
        width: 100%;
      
    }
    @media (max-width: 576px) {
        
            width: 6rem;
            height: 2rem;
       
        }
`;


export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #afafaf;
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const ErrorMessage = styled.div`

color:red
`
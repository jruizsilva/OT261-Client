import styled from 'styled-components';


const HomeStyles = styled.div`
  margin-top: 30px;
  font-family: var(--font-poppins);
  .home-top-section {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 992px) {
      flex-direction: row;
      justify-content: center;
    }
    gap: 20px;

    .home-top-section-left {
      @media screen and (min-width: 992px) {
        width: 50%;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        text-align: left;
        font-weight: 600;
        @media screen and (min-width: 992px) {
          font-size: 2.5rem;
        }
        font-size: 1.5rem;
        margin: 0;
      }
      p {
        @media screen and (min-width: 992px) {
          font-size: 1.25rem;
        }
        font-size: 1.1rem;
        margin: 0;
        font-family: var(--font-mulish);
        margin-bottom: 1em;
      }
      a {
        @media screen and (min-width: 992px) {
          width: 40%;
          padding: 20px 10px;
          font-size: 24px;
        }
        width: auto;
        font-size: 18px;
        padding: 10px 10px;
        font-family: var(--font-mulish);
        font-weight: 700;
        line-height: 30px;
        color: #ffffff;
        margin-right: auto;
        margin-left: 0%;
      }
    }
    .home-top-section-right {
      @media screen and (min-width: 992px) {
        width: 50%;
      }
      img {
        object-fit: cover;
        width: calc(100% / 1.2);
        height: 100%;
        @media screen and (min-width: 992px) {
          min-height: 440px;
          max-height: 440px;
          margin-right: auto;
          margin-left: 0;
        }
        margin: auto;
        border-radius: 2.75rem;
      }
    }
  }
`;


export default HomeStyles;
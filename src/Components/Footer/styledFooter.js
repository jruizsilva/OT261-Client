import styled from 'styled-components';

const Footer = styled.div`
  background-color: #c0c0c0;
  margin-top: auto;
  .footer-top {
    .footer-logo {
      width: auto;
    }
    display: flex;
    div {
      &.footer-top-image {
        width: 15%;
        height: auto;
        img {
          margin: auto;
        }
      }
      &:not(.footer-top-image) {
        border-bottom: black 2px solid;
        height: 55px;
      }
      &:first-of-type {
        width: 45%;
      }
      &:last-of-type {
        width: 45%;
      }
      @media screen and (max-width: 1000px) {
        &:first-of-type {
          width: 30%;
        }
        &:last-of-type {
          width: 30%;
        }
        &.footer-top-image {
          width: 40%;
        }
      }
    }
  }
  .footer-middle {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 35px;
    border-bottom: black 2px solid;
    a {
      color: black;
      text-decoration: none;
    }
    a:hover {
      font-weight: 600;
    }
  }
  .footer-bottom {
    margin-top: 35px;
    margin-bottom: 50px;
    text-align: center;
    .footer-social-links {
      display: flex;
      justify-content: center;
      gap: 10px;
      a {
        color: black;
        .bi {
          font-size: 2.5em;
        }
      }
    }
    .footer-copyright {
      margin-top: 10px;
    }
  }
`;

export const SocialLink = styled.i`
  &:hover {
    color: ${({ color }) => color};
  }
  transition: all 0.2s;
`;

export default Footer;

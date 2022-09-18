import styled from 'styled-components';

const HomeDetail = styled.div`
  & > h1 {
    font-weight: 600;
  }
  .carousel.slide {
    width: 105%;
    translate: -12px;

    .carousel-item > img {
      height: 500px;
    }
  }
  .content-container {
    max-width: 65%;
    padding-block-start: 15px;
    margin-block-end: 60px;

    a {
      font-size: 25px;
      margin-inline: 0;
      font-weight: 600;
      margin-block-start: 20px;
    }
  }
`;

export default HomeDetail;
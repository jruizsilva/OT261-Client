import styled from "styled-components";

const NewsCardStyle = styled.div`
  @media screen and (min-width: 768px) {
    width: 30.25rem;
    height: 16.625rem;
  }
  width: auto;
  height: 12.5rem;

  background-color: #7e9afd;
  border: 2px solid #0038ff;
  border-radius: 1.25rem;
  padding: 1.125rem 0.75rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;

  .news-card-left {
    display: flex;
    @media screen and (max-width: 767px) {
      width: calc(35% - 20px);
    }
    img {
      border-radius: 20px;
    }
  }

  .news-card-right {
    padding-left: 20px;
    padding-top: 15px;
    @media screen and (min-width: 768px) {
      width: 50%;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: white;
      background: #0038ff;
      border-radius: 15px;
      width: 100%;
      @media screen and (min-width: 768px) {
        padding: 10px 50px;
      }
      padding: 10px 30px;
      box-shadow: 2px 2px 2px 1px rgb(1 0 0 / 20%);

      &:hover {
        background: blue;
      }
    }
  }
`;

export default NewsCardStyle
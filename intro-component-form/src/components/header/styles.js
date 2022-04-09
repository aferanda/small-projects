import styled from 'styled-components';

export const HeaderStyle = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    row-gap: 21px;
    padding: 0;
  }

  h1 {
    color: white;
    font-size: 3rem;
    line-height: 55px;
    letter-spacing: 0.5px;

    @media(max-width: 800px) {
      font-size: 1.7rem;
      line-height: 37px;
      text-align: center;
    }
  }

  p {
    color: white;
    font-size: 1rem;
    line-height: 26px;

    @media(max-width: 800px) {
      text-align: center;
    }
  }
`;

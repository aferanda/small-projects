import styled, { createGlobalStyle } from 'styled-components';

import bg_desktop from '../images/bg-intro-desktop.png';
import bg_mobile from '../images/bg-intro-mobile.png';

export default createGlobalStyle`
  
  :root {
    --red: hsl(0, 100%, 74%);
    --green: hsl(154, 59%, 51%);
    --blue: hsl(248, 32%, 49%);
    --dark-blue: hsl(249, 10%, 26%);
    --grayish-blue: hsl(246, 25%, 77%);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    max-width: 1440px;
    height: 100vh;
    background: url(${bg_desktop});
    background-color: var(--red);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    
    @media(max-width: 800px) {
      background: url(${bg_mobile});
      background-color: var(--red);
      height: auto;
    }
  }
`;

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  padding: 0 150px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 90px 24px 0;
    height: auto;
  }
`;

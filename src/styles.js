import styled from 'styled-components';
import icon from './images/icon-error.svg';

export const Main = styled.div`
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  padding: 0 150px;
`;

export const Text = styled.div`
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  row-gap: 28px;

  h1 {
    color: white;
    font-size: 3rem;
    line-height: 55px;
    letter-spacing: 0.5px;
  }

  p {
    color: white;
    font-size: 1rem;
    line-height: 26px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 22px;

  form {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 44px;
    box-shadow: 0 8px 1px 0 #00000020;
    margin-bottom: 8px;
    width: 540px;
  }

  input {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--dark-blue);
    border-radius: 6px;
    border: 2px solid #ededed;
    height: 58px;
    margin-top: 18px;
    width: 85%;
    padding: 0 30px;
  }

  input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  input:focus {
    border: none;
    outline: 1px solid var(--blue);
  }
  
  input:invalid, input.invalid {
    font-family: 'Poppins', sans-serif;
    color: var(--red);
    font-weight: 600;
    outline: none;
    border: 2px solid var(--red);
    background: url(${icon}) no-repeat right 5% bottom 50%;
  }
  
  div {
    font-size: 0.7rem;
    color: var(--red);
    width: 85%;
    text-align: end;
    font-style: italic;
    margin-top: 5px;
  }

  button[type="button"] {
    border: none;
    border-radius: 5px;
    box-shadow: 0 8px 1px 0 #00000020;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    height: 60px;
    font-size: 0.95rem;
    font-weight: 400;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 24px;
    width: 540px;

    span {
      font-weight: 600;
    }
  }

  button[type="submit"] {
    border: none;
    background-color: var(--green);
    box-shadow: 1px -3px 1px 1px #00000014 inset;
    color: white;
    border-radius: 7px;
    height: 56px;
    width: 85%;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 20px;
    cursor: pointer;
  }

  button[type="submit"]:disabled {
    background-color: rgba(56, 204, 140, 51%);
  }

  p {
    font-size: 0.7rem;
    color: #c4c1c1;
    margin-top: 13px;

    span {
      color: var(--red);
      font-weight: 600;
    }
  }
`

export const FooterStyle = styled.footer`
  font-family: 'Poppins', sans-serif;
  color: #ededed;

  p {
    font-size: 0.7rem;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
  }

  a {
  text-decoration: none;
  color: #ededed;
  }
`;

import styled from 'styled-components';

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

  h1 {
    color: white;
    font-size: 3rem;
    line-height: 55px;
    margin-bottom: 30px;
  }

  p {
    color: white;
    font-size: 1rem;
    line-height: 28px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;

  form {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    box-shadow: 0 7px 1px 0 #00000030;
  }

  input {
    border-radius: 6px;
    border: 2px solid #ededed;
    height: 60px;
    width: 100%;
    margin-bottom: 20px;
    width: 85%;
    padding: 0 30px;
  }

  input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
  }

  input:focus {
    outline: 1px solid var(--blue);
  }
  
  div {
    font-size: 0.7rem;
    color: var(--red);
  }

  button[type="button"] {
    border: none;
    border-radius: 5px;
    box-shadow: 0 7px 1px 0 #00000030;
    background-color: var(--blue);
    color: white;
    border-radius: 10px;
    height: 60px;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;

    span {
      font-weight: 700;
    }
  }

  button[type="submit"] {
    border: none;
    background-color: var(--green);
    box-shadow: 1px -3px 1px 1px #00000014 inset;
    color: white;
    border-radius: 7px;
    height: 60px;
    width: 85%;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 0.7rem;
    color: #c4c1c1;
    margin-top: 20px;

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

import styled from 'styled-components';

export const Container = styled.div`
  .menuClass {
    background-color: #282828;
    padding: 15px;
    height: 100%;
    .exit {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;

export const CartHeader = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    position: absolute;
    width: 25px;
    height: 25px;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 600px;
    text-align: center;
    color: #fff;

    small {
      font-size: 16px;
      color: #fff;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;

  ul {
    list-style: none;
    li {
      display: flex;
      width: 100%;
      align-items: center;
      padding: 60px 15px;
      height: 100px;
      background: rgb(16%, 16%, 16%, 0.9);
      box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
      transition: 0.4s ease;
      &:hover {
        box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.5);
        background: rgb(61, 61, 61, 0.5);
      }

      div {
        h5 {
          margin-left: 10px;
        }

        p {
          font-size: 12px;
          color: hsl(0, 0%, 76%);
          margin-left: 10px;
          margin-top: 10px;
        }
      }

      #remove {
        display: block;
        padding-left: 75px;
        margin-bottom: 50px;
      }

      #price {
        display: block;
        h4 {
          font-size: 20px;
          margin-left: 20px;
          color: #0066ff;
          font-weight: normal;
        }
      }
      img {
        max-height: 90px;
      }
      & + li {
        margin-top: 5px;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px;
  background: rgb(16%, 16%, 16%, 0.9);
  transition: 0.4s ease;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  &:hover {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.5);
    background: rgb(61, 61, 61, 0.5);
  }
  div h5 {
    font-size: 16px;
    font-weight: normal;
    color: hsl(0, 0%, 76%);
  }
  div h4 {
    font-size: 24px;
    color: #0066ff;
    font-weight: bold;
    margin-right: 28px;
  }
`;

export const Button = styled.button`
  height: 48px;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 6px;
  color: #fff;
  background: #26de81;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  border: 0;
  cursor: pointer;

  transition: 0.2s ease;
  &:hover {
    background-color: #20bf6b;
  }
`;

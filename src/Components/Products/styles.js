import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  padding: 0 50px;
  background: rgb(61, 61, 61, 0.5);
  transition: 0.4s ease;
  color: #fff;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px 0 hsl(0, 0%, 0%, 0.1);
  &:hover {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.5);
  }

  img {
    display: block;
    height: 200px;
    margin-top: 20px;
  }

  .product-info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding: 0 10px;
    flex-direction: column;
    text-align: center;

    h4 {
      font-size: 16px;
    }

    .price-place {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: row;
      padding: 0 50px;
      margin-top: 15px;

      span {
        font-size: 14px;
        color: #ffff;
      }
      p {
        font-size: 18px;
        font-weight: bolder;
        color: #ffff;
      }
    }

    .product-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      #frete {
        color: #26de81;
        font-size: 12px;
      }
      small {
        color: #7f8c8d;
        font-size: 12px;
      }
    }
  }
`;

export const AddToCart = styled.footer`
  flex: 1;
  button {
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    border: none;
    color: #fff;
    background-color: #26de81;
    cursor: pointer;
    border-radius: 4px;
    padding: 0 20px;
    transition: 0.2s ease;
    margin-top: 30px;
    margin-bottom: 30px;
    &:hover {
      background-color: #20bf6b;
    }
  }
`;

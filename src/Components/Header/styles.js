import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 350px;
  height: 130px;
  border-bottom: 1px solid rgb(75, 75, 75, 0.9);
  padding: 0 80px;

  #cart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    position: absolute;
    width: 15px;
    height: 15px;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 600px;
    text-align: center;
    color: #fff;

    small {
      font-size: 10px;
      color: #fff;
    }
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  img {
    display: inline-block;
    max-height: 65px;
  }
`;

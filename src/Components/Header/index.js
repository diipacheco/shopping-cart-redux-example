import React from 'react';
import { MdSearch, MdLocalGroceryStore } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../Store/Ducks/Cart/actions';
import logo from '../../Assets/logo.svg';
import { Container } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.addedItems);

  return (
    <Container>
      <MdSearch size={35} color="#FFFF" />
      <img src={logo} alt="Logo" />
      <button type="button" onClick={() => dispatch(toggleCart(true))}>
        <MdLocalGroceryStore size={35} color="#FFFF" />
        <div>
          <small>{products.length}</small>
        </div>
      </button>
    </Container>
  );
}

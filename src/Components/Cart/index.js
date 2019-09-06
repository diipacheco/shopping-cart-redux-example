import React from 'react';
import { createSelector } from 'reselect';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import {
  MdClose,
  MdLocalGroceryStore,
  MdRemoveShoppingCart,
  MdAddShoppingCart,
} from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Customscroll from 'react-customscroll';
import { ToastContainer, toast } from 'react-toastify';
import { toggleCart, removeFromCart, addToCart } from '../../Store/Ducks/Cart/actions';
import {
  Container, CartHeader, Content, Footer, Button, EmptyCart,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

import Products from '../Products';

export default function Cart() {
  const dispatch = useDispatch();
  const status = useSelector(state => state.cart.isMenuOpened);
  const products = useSelector(state => state.cart.addedItems);

  const total = createSelector(
    state => state.cart.addedItems,
    items => items.reduce((subtotal, item) => subtotal + item.subtotal, 0),
  );

  const totalFormated = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const success = () => {
    toast.success(`Obrigado pela compra, o subtotal é: ${totalFormated}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const info = () => {
    toast.info('Adicione algum produto no carrinho!', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <Container>
      <ToastContainer />
      <OffCanvas
        width={360}
        transitionDuration={300}
        effect="parallax"
        isMenuOpened={status}
        position="right"
      >
        <OffCanvasBody>
          <Products />
        </OffCanvasBody>
        <OffCanvasMenu className="menuClass">
          <button type="button" className="exit" onClick={() => dispatch(toggleCart(false))}>
            <MdClose size={30} color="#FFF" />
          </button>
          <CartHeader>
            <button type="button">
              <MdLocalGroceryStore size={50} color="#FFF" />
              <div>
                <small>{products.length}</small>
              </div>
            </button>
          </CartHeader>
          <div style={{ height: '350px' }}>
            <Customscroll>
              <Content>
                {!products.length && (
                  <EmptyCart>
                    <MdRemoveShoppingCart size={120} color="rgb(204, 204, 204, 0.2)" />
                    <strong>Seu carrinho está vazio!</strong>
                    <p>Adicione algum quadrinho para prosseguir com a compra.</p>
                  </EmptyCart>
                )}
                <ul>
                  {products.map(product => (
                    <li key={product.id}>
                      <img src={product.image} alt="Produto Adicionado" />
                      <div>
                        <h5>{product.title}</h5>
                        <p>{`Quantidade: ${product.addedToCart}`}</p>
                      </div>
                      <div id="price">
                        <div id="remove">
                          <button type="button" className="exit">
                            <MdAddShoppingCart
                              style={{ marginRight: '10px' }}
                              size={20}
                              color="#26de81"
                              onClick={() => dispatch(addToCart(product.id))}
                            />
                          </button>
                          <button
                            type="button"
                            className="exit"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            <MdClose size={20} color="#FFF" />
                          </button>
                        </div>
                        <h4>
                          {product.subtotal.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          })}
                        </h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </Content>
            </Customscroll>
          </div>
          <Footer>
            <div>
              <h5>Subtotal</h5>
              <h4>{totalFormated}</h4>
            </div>
            <Button type="button" onClick={!products.length ? info : success}>
              Checkout
            </Button>
          </Footer>
        </OffCanvasMenu>
      </OffCanvas>
    </Container>
  );
}

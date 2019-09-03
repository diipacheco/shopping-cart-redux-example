import React from 'react';
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from 'react-offcanvas';
import { MdClose, MdLocalGroceryStore } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Customscroll from 'react-customscroll';
import { toggleCart, removeFromCart } from '../../Store/Ducks/Cart/actions';
import {
  Container, CartHeader, Content, Footer, Button,
} from './styles';
import Products from '../Products';

export default function Cart() {
  const status = useSelector(state => state.cart.isMenuOpened);
  const products = useSelector(state => state.cart.addedItems);
  const dispatch = useDispatch();
  const total = products.reduce((subtotal, item) => subtotal + item.price, 0);
  const totalFormated = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Container>
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
                <ul>
                  {products.map(product => (
                    <li key={product.id}>
                      <img src={product.image} alt="Produto Adicionado" />
                      <div>
                        <h5>{product.title}</h5>
                        <p>Quatidade: 1</p>
                      </div>
                      <div id="price">
                        <div id="remove">
                          <button
                            type="button"
                            className="exit"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            <MdClose size={20} color="#FFF" />
                          </button>
                        </div>
                        <h4>
                          {product.price.toLocaleString('pt-BR', {
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
            <Button
              type="button"
              onClick={() => {
                !products.length
                  ? alert('Adicione algum produto no carrinho')
                  : alert(`Obrigado pela compra, o subtotal é: ${totalFormated}`);
              }}
            >
              Checkout
            </Button>
          </Footer>
        </OffCanvasMenu>
      </OffCanvas>
    </Container>
  );
}

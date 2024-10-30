import React from 'react';
import { Carousel } from 'react-bootstrap';
import promo1 from '../../../assets/img/promo1.png';
import promo2 from '../../../assets/img/promo2.png';
import promo3 from '../../../assets/img/promo3.png';
import './CarrosselPromocoes.css';


const CarrosselPromocoes = () => {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <div>
        <img
          className="d-block w-100 carousel-img" // Adicione a classe aqui
          src={promo1}
          alt="Promoção 1"
        />
        </div>
        <Carousel.Caption>
          <h3>Promoção 1</h3>
          <p>Frete especial com 20% de desconto.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div>
        <img
          className="d-block w-100 carousel-img" // Adicione a classe aqui
          src={promo2}
          alt="Promoção 2"
        />
        </div>
        <Carousel.Caption>
          <h3>Promoção 2</h3>
          <p>Entrega garantida no mesmo dia!</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className=''>
        <img
          className="d-block w-100 carousel-img" // Adicione a classe aqui
          src={promo3}
          alt="Promoção 3"
        />
        </div>
        <Carousel.Caption>
          <h3>Promoção 3</h3>
          <p>Primeira entrega grátis para novos clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarrosselPromocoes;
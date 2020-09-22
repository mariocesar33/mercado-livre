import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  Dispatchtag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction:React.FC = () => {
  return(
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon />
      </Row>

      <Dispatchtag>Enviando normalmente</Dispatchtag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">CV$</span>
          <span className="fraction">500</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de 166,66$00</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete grátis</span>
          <span className="details">Benefício</span>

          <a href="#" className="more">Ver mais opções</a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid></Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>
            Compra Garantida, receba o produto que está esperando ou
            devolvemos o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
}

export default ProductAction;

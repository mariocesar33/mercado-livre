import React from 'react';

import SellerInfo from '../SellerInfo';

import tshistImage from '../../assets/tshirt.png';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

const Product:React.FC = () => {
  return(
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshistImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}

          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida de um ano</p>
        <p className="description">
          Receba o produto que você está esperando ou evolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum interdum accumsan sed quisque nisl scelerisque fames, arcu
      erat luctus ultricies rhoncus himenaeos sagittis lorem fames, ad molestie
      ornare luctus dui hendrerit suscipit.
      class praesent sem primis fames habitant suscipit a pharetra enim ligula
      euismod, inceptos lacus lobortis sollicitudin hendrerit volutpat.
      <br />
      <br />
      Itens incluses: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum interdum accumsan sed quisque nisl scelerisque fames, arcu
      erat luctus ultricies rhoncus himenaeos sagittis lorem fames, ad molestie
      ornare luctus dui hendrerit suscipit. class praesent sem primis fames
      habitant suscipit a pharetra enim ligula euismod, inceptos lacus lobortis
      sollicitudin hendrerit volutpat consectetur et curabitur egestas, sodales
      ad pellentesque dictumst cras tempus ornare cras posuere mattis.
      porta dictum egestas nisl nullam libero conubia tincidunt blandit lacus
      bibendum, pulvinar inceptos habitant fusce amet elit gravida pretium sapien,
      lorem adipiscing ligula posuere urna dapibus hac gravida mauris.
      suspendisse consequat a felis conubia blandit litora aliquam magna proin,
      habitant platea erat etiam elit suspendisse volutpat ligula, purus tellus
      velit tempor at imperdiet donec ante.
      Lorem ipsum interdum accumsan sed quisque nisl scelerisque fames, arcu
      erat luctus ultricies rhoncus himenaeos sagittis lorem fames, ad molestie
      ornare luctus dui hendrerit suscipit. class praesent sem primis fames
      habitant suscipit a pharetra enim ligula euismod, inceptos lacus lobortis
      sollicitudin hendrerit volutpat consectetur et curabitur egestas, sodales
      ad pellentesque dictumst cras tempus ornare cras posuere mattis.
      porta dictum egestas nisl nullam libero conubia tincidunt blandit lacus
      bibendum, pulvinar inceptos habitant fusce amet elit gravida pretium sapien,
    </p>
  </Description>
);

export default Product;

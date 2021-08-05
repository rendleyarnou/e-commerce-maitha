import React, { Fragment } from 'react'
import { Row, Col, Description, Delivery, Message, Payment } from './styles'

const Checkout = () => {
  return (
    <Fragment>
      <Row>
        <Description>
          <Col>
            {/* <img /> */}
          </Col>
          <Col>
            <h4>Tênis adidas Superstar Masculino</h4>
          </Col>
          <Col>
            <input type='number' min='0' max='100' />
            <button>Excluir</button>
          </Col>
          <Col>
            <h4>R$499,90</h4>
          </Col>
        </Description>
      </Row>
      <Row>
        <Col>
          <Delivery>
            <h3>
              {/* <img /> */}
              <p>Entrega</p>
            </h3>
            <Row>
              <p>R$64,76 12 dias SEDEX</p>
              <p>Entrega domiciliar diferenciada</p>
            </Row>
          </Delivery>
          <Message>
            <h3>
              {/* <img /> */}
              <p>Mensagem</p>
            </h3>
            <Row>
              <p>Gostaria de enviar observação?</p>
              <textarea />
            </Row>
          </Message>
        </Col>
        <Col>
          <Payment>
            <h3>
              {/* <img /> */}
              <p>Pagamento</p>
            </h3>
            <ul>
              <li>Pagamento 1</li>
              <li>Pagamento 2</li>
              <li>Pagamento 3</li>
            </ul>
            <button>Finalizar compra</button>
          </Payment>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Checkout

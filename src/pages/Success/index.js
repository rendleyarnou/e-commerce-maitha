import React, { Fragment } from 'react'
import { Col, Check, Message, Description, Account } from './styles'

const Success = () => {
  return (
    <Fragment>
      <Col>
        <Col>
          <Check>
            {/* <img /> */}
          </Check>
        </Col>
        <Col>
          <Message>
            <h4>Compra Realizada com Sucesso!</h4>
          </Message>
        </Col>
        <Col>
          <Description>
            <p>
              Para acompanhar pagamentos, recibos e os benefícios do seu plano
              acesse a área do usuário.
            </p>
          </Description>
        </Col>
        <Col>
          <Account>
            <button>Minha conta</button>
          </Account>
        </Col>
      </Col>
    </Fragment>
  )
}

export default Success

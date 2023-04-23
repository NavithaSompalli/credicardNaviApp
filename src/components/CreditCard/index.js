import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  MainHeading,
  CreditCardDetailsContainer,
  Heading,
  CreditCardImage,
  CreditNumber,
  CreditCardHolderHeading,
  PaymentCardContainer,
  CardNumberInput,
  CardNameInput,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <MainHeading>CREDIT CARD</MainHeading>
        <CreditCardImage data-testid="creditCard">
          <CreditNumber>{cardNumber}</CreditNumber>
          <CreditCardHolderHeading>CARDHOLDER NAME</CreditCardHolderHeading>
          <CardHolderName>{cardHolderName}</CardHolderName>
        </CreditCardImage>
      </CreditCardContainer>
      <CreditCardDetailsContainer>
        <PaymentCardContainer>
          <Heading>Payment Method</Heading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardHolderName}
          />
        </PaymentCardContainer>
      </CreditCardDetailsContainer>
    </AppContainer>
  )
}

export default CreditCard

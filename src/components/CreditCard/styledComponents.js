import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  width: 50%;
  display: flex;
  flex-direction: column;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  text-decoration: underline;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
`
export const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 200px;
  width: 400px;
  border-radius: 15px;
  align-self: center;
  margin-top: 150px;
  align-items: space-around;
`

export const CreditNumber = styled.p`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 60px;
  margin-left: 30px;
`
export const CreditCardHolderHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #c3cad9;

  margin-left: 30px;
`

export const CardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #c3cad9;
  margin-left: 30px;
`

export const CreditCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const PaymentCardContainer = styled.div`
  box-shadow: 8px 8px 8px 8px #888888;
  height: 300px;
  width: 500px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 25px;
  text-align: center;
  font-family: 'Roboto';
  color: #344e7a;
`

export const CardNumberInput = styled.input`
  height: 40px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  width: 300px;
  padding-left: 10px;
  outline: none;
`

export const CardNameInput = styled.input`
  height: 40px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  width: 300px;
  padding-left: 10px;
  outline: none;
`

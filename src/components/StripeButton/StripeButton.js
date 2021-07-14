import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import API_KEY from './config';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
  };

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={API_KEY}
      />
    </div>
  );
};

export default StripeButton;

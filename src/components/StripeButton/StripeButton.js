import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import API_KEY from './config';
import { clearCart } from '../../redux/cart/cart-actions';

const StripeButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment successful');
    clearCart();
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

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeButton);

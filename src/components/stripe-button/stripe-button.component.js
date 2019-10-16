import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import Message from '../msg_alerts/msg-alerts.component';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_gMoUUazvzax0O9M8lAaouWwQ00uVWqkzzv";

  const  onToken = token=>{
        console.log(token);
        Message('Payment Sucessful!','success');
    }

    return(
        <StripeCheckout
        label ='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'
        description={`Your total is $$${price}`}
        amount={priceForStripe}
        panelLabel={'Pay Now'}
        token={onToken}
        stripeKey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;
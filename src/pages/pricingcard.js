import './pricingCard.css';
import Card from 'react-bootstrap/Card';

const PricingCard = (props) => {

    const servingPrice = 10.40;
    const servingPriceDisplay = (servingPrice).toFixed(2);
    const primeTotal = servingPrice * props.meals * props.people;
    const primeTotalDisplay = primeTotal ? (primeTotal).toFixed(2) : '0' ;
    const shippingPrice = 5.00;
    const shippingPriceDisplay = (shippingPrice).toFixed(2);
    const finalTotal = primeTotal + shippingPrice;
    const finalTotalDisplay = finalTotal ? (finalTotal).toFixed(2) : '0';

    return (
        <Card>
            <Card.Body>
                <h5>
                    <b>{props.meals ? props.meals : 0}</b> meals for <b>{props.people ? props.people : 0}</b> people for this week.
                </h5>
                <h5>
                    <b>{props.meals * props.people ? props.meals * props.people : 0}</b> total servings
                </h5>
                <hr/>
                <div id="details">
                    <div id="detail">
                        <div id="detail-label">
                            Box Price
                        </div>
                        <div id="price">
                            {primeTotalDisplay ? primeTotalDisplay : '0'} TND
                        </div>
                    </div>
                    <div id="detail">
                        <div id="detail-label">
                            Pricing per serving
                        </div>
                        <div id="price">
                            {servingPriceDisplay} TND
                        </div>
                    </div>
                    <div id="detail">
                        <div id="detail-label">
                            Shipping
                        </div>
                        <div id="price">
                            + {shippingPriceDisplay} TND
                        </div>
                    </div>
                </div>
                <div id="total">
                    <div id="total-label" >
                        Total
                    </div>
                    <div id="total-price">
                        {finalTotalDisplay ? finalTotalDisplay : '0'} TND
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PricingCard;


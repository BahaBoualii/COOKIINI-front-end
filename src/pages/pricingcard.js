import './pricingCard.css';
import Card from 'react-bootstrap/Card';

const PricingCard = (props) => {

    const servingPrice = 10.40;
    const primeTotal = servingPrice * props.meals * props.people;
    const shippingPrice = 5.00;
    const finalTotal = primeTotal + shippingPrice;

    return (
        <Card>
            <Card.Body>
                <h5>
                    <b>{props.meals}</b> meals for <b>{props.people}</b> people for this week.
                </h5>
                <h5>
                    <b>{props.meals * props.people}</b> total servings
                </h5>
                <hr/>
                <div id="details">
                    <div id="detail">
                        <div id="detail-label">
                            Box Price
                        </div>
                        <div id="price">
                            {primeTotal} TND
                        </div>
                    </div>
                    <div id="detail">
                        <div id="detail-label">
                            Pricing per serving
                        </div>
                        <div id="price">
                            {servingPrice} TND
                        </div>
                    </div>
                    <div id="detail">
                        <div id="detail-label">
                            Shipping
                        </div>
                        <div id="price">
                            + {shippingPrice} TND
                        </div>
                    </div>
                </div>
                <div id="total">
                    <div id="total-label" >
                        Total
                    </div>
                    <div id="total-price">
                        {finalTotal} TND
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PricingCard;


import { Card } from 'react-bootstrap'

export default function ContactCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>{props.contactInfo.name}</Card.Title>
                    <Card.Text>
                        {props.contactInfo.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
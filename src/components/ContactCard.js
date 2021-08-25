import React from 'react'
import user from '../images/user.png'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
                <Link to = { {pathname: `/contact/${id}`, state: {contact: props.contact} } }>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </Link>
            </div>
            <Link to = { {pathname: `/edit/${id}`, state: {contact : props.contact} } } >
                <i className='edit alternate outline icon' style={{ color: 'blue', marginTop: '7px', marginRight: '8px', float: 'right' }} />
            </Link>
            <i className='trash alternate outline icon' style={{ color: 'red', marginTop: '7px', float: 'right' }} onClick={() => props.clickHandler(id)} />

        </div>
    )
}
export default ContactCard;
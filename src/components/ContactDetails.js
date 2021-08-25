import React from 'react'
import user from '../images/user.png'

const ContactDetails = (props) => {
    const {id, name, email} = props.location.state.contact
    console.log('contact Details:', props)
    return (
        <div className='main'>
            <div className='ui card'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
        </div>
    )
}
export default ContactDetails;
import React,{useRef} from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = (props) => {

    const inputEl = useRef('')

    const deleteContactHandler = (id) => {
        props.getContactId(id)
    }

    const renderContactList = props.contacts.map((contact,key) => {
        return (
            <ContactCard key={key} contact={contact} clickHandler={deleteContactHandler} id={contact.id} />
        )
    })

    const getSearchTerm = () => {
        props.searchTermHandler(inputEl.current.value)
    }

    return (
        <div className='main marginTopHeading'>
            <h2>
                Contacts List
                <Link to='/add'><button className='ui button blue btn-right'>Add contact</button></Link>
            </h2>
            <div className='ui search'>
                <div className='ui icon input'>
                    <input type='text' placeholder='Search Contacts' value={props.term} className='prompt' ref={inputEl} onChange={getSearchTerm}/>
                    <i className='search icon' />
                </div>
            </div>
            <div className='ui celled list ui divided items'>
                { renderContactList.length > 0 ? renderContactList : 'No contacts available' }
            </div>
        </div>
    )
}
export default ContactList;
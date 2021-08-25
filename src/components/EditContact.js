import React,{useState} from 'react'

const EditContact = (props) => {

    const contact = props.location.state.contact
    console.log('contact Edit:', contact)

    const [id, setId] = useState(contact.id)
    const [name, setName] = useState(contact.name)
    const [email, setEmail] = useState(contact.email)

    const update = (e) => {
        e.preventDefault()
        if ( name === '' || email === '' ) {
            alert('All fields are manadatory!')
            return;
        }
        let contact = {id,name, email}
        props.editContactHandler(contact)
        setName('')
        setEmail('')
        props.history.push('/')
    }

    return (
        <div className='ui main marginTop'>
            <h2>Edit Contact</h2>
            <form className='ui form' onSubmit={update}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' name='name' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className='ui button blue'>Update</button>
            </form>
        </div>
    )
}
export default EditContact;
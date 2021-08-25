import React,{useState} from 'react'

const AddContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const add = (e) => {
        e.preventDefault()
        if ( name === '' || email === '' ) {
            alert('All fields are manadatory!')
            return;
        }
        let contact = {name, email}
        props.addContactHandler(contact)
        setName('')
        setEmail('')
        props.history.push('/edit')
    }

    return (
        <div className='ui main marginTop'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={add}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' name='name' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
}
export default AddContact;
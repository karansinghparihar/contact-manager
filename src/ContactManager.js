import { Button } from "react-bootstrap"
import { useState } from "react"
import ContactCard from './ContactCard'

export default function ContactManager(){
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cardDisplay, setCardDisplay] = useState(false)
    let contactInfo = { name, email }
    
    function addContact(){
        if (name !== '') {
            setCardDisplay(true)
        } else {
            setCardDisplay(false)
        }
    }

    return(
        <div>
            <h1>Contact Manager App!</h1> <br /><br />
            <form>
                <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} /><br /><br />
                <input type='email' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                {/* <input type='password' placeholder='Enter your password' /><br /><br />
                <input type='number' placeholder='Enter your Phone No.' /> <br /><br /><br /> */}
                <Button onClick={addContact}>Add</Button>
                {
                    cardDisplay ? <ContactCard contactInfo={contactInfo} /> : null
                }
            </form>
        </div>
    )
}
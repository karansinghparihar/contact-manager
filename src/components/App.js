import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid_v4 } from 'uuid';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import api from '../api/contacts'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import PageNotFound from './PageNotFound';
import EditContact from './EditContact';

export default function App() {

  //const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid_v4(),
      ...contact
    }
    const response = await api.post('/contact', request)
    setContacts([...contacts, response.data])
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contact/${id}`)
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactsList)
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contact/${contact.id}`, contact)
    setContacts(contacts.map((contact) => {
      return contact.id === response.data.id ? {...response.data} : contact
    }))
  }

  const retrieveContacts = async () => {
    const response = await api.get('/contact')
    return response.data
  }

  const searchTermHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join(' ').toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) {
        setContacts(allContacts)
      }
    }
    getAllContacts()
  }, [])

  // useEffect(() => {
  //   localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(contacts) )
  // }, [contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>

          <Route exact path='/' render={(props) => (
            <ContactList {...props} contacts={ searchTerm.length < 1 ? contacts : searchResults } getContactId={removeContactHandler} term={searchTerm} searchTermHandler={searchTermHandler} />
          )} />

          <Route path='/add' render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler} />
          )} />

          <Route path='/edit/:id' render={(props) => (
            <EditContact {...props} editContactHandler={updateContactHandler} />
          )} />

          <Route path='/contact/:id' render={(props) => (
            <ContactDetails {...props} />
          )} />


          <Route path='*'><PageNotFound /></Route>

        </Switch>
      </Router>
    </div >
  );
}

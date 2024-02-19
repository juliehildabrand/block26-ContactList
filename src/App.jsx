import './App.css'
import ContactList from './compopnents/ContactList.jsx'
import SelectedContact from './compopnents/SelectedContact.jsx'
import { useState } from 'react'

function App() {

  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
        <div>Selected Conatct View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App

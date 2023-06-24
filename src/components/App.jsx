import { Component } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class Phonebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  onDeletContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  onContactInfo = contactData => {
    this.state.contacts.find(element => element.name === contactData.name)
      ? alert(`${contactData.name} is aleady in contacs!`)
      : this.setState({
          contacts: [contactData, ...this.state.contacts],
        });
  };

  onFilterContact = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const normalisedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    return (
      <div className={css.appDiv}>
        <h1>Phonebook</h1>
        <ContactForm onContactInfo={this.onContactInfo} />
        <section>
          <h2>Contacts</h2>
          <Filter
            onFilterData={this.state.filter}
            onFilterContact={this.onFilterContact}
          />
          {}
          <ContactList
            onDeletContact={this.onDeletContact}
            listContacts={this.getVisibleContacts()}
          />
        </section>
      </div>
    );
  }
}

export default Phonebook;

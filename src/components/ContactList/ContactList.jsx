import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import React from 'react';

const ContactList = ({ onDeletContact, listContacts, onFilterContact }) => {
  return (
    <ul>
      {listContacts.map(listContact => (
        <li key={listContact.id}>
          <ContactItem
            onDeletContact={onDeletContact}
            id={listContact.id}
            name={listContact.name}
            number={listContact.number}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  ).isRequired,
};

export default ContactList;

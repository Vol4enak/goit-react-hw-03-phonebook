import React from 'react';
import { ContactInfo, ContactButtom } from './ContactList.styled';
export const ContactList = ({ items, onDeleteContact }) => {


  return (
    <>
      <ul>
        {items.map(({ id, name, number }) => (
          <ContactInfo key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <ContactButtom type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </ContactButtom>
          </ContactInfo>
        ))}
      </ul>
    </>
  );
};
export default ContactList;

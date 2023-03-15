import React, { Component } from 'react';

import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ContactForm } from './ContantForm/contactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  deleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };

  formSubmitHandler = ({ name, number }) => {
    const onFindSame = this.visibleContact();
    const res = onFindSame.find(index => index.name === name);
    if (res) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  componentDidMount(prevProps, prevState) {
    const contact = localStorage.getItem('contacts');
    if (contact) {
      const parsetCont = JSON.parse(contact);
      this.setState({ contacts: parsetCont });
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  filterByName = data => {
    this.setState({ filter: data });
  };
  visibleContact = () => {
    const normalaizedfilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedfilter)
    );
  };
  render() {
    const visibility = this.visibleContact();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          onFilter={this.filterByName}
        />

        <h2>Contacts</h2>

        <Filter onChange={this.filterByName} />

        <ContactList items={visibility} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

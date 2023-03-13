import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handelChange}
            value={this.state.name}
            required
          />
        </label>
        <br />
        <label>
          phone
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handelChange}
            value={this.state.number}
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

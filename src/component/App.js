import React, { Component } from "react";
import ContactList from "./contsctList/ContactList";
import Form from "./form/Form";
import Filter from "./filter/Filter";

export default class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],

  //   filter: "",
  // };
  // filterHandler = (e) => {
  //   const { value } = e.target;
  //   this.setState({ filter: value });
  // };

  // getFilterContact = () => {
  //   return this.state.contacts.filter((contact) =>
  //     contact.name
  //       .toLocaleLowerCase()
  //       .includes(this.state.filter.toLocaleLowerCase())
  //   );
  // };

  // deleteContact = (e) => {
  //   const { id } = e.target;
  //   this.setState({
  //     contacts: this.state.contacts.filter((el) => el.id !== id),
  //   });
  // };

  // addContact = (contact) => {
  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts, { id: uuid(), ...contact }],
  //   }));
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.state.contacts);
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // componentDidMount() {
  //   const newContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (newContacts) {
  //     this.setState({ contacts: newContacts });
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    );
  }
}

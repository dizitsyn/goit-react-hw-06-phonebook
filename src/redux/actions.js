import { v4 as uuid } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phoneBook/add", ({ name, number }) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

const delContact = createAction("phoneBook/del");
const filter = createAction("phoneBook/filter");

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuid(),
//     name,
//     number,
//   },
// });

// const delContact = (contactId) => ({
//   type: types.DEL,
//   payload: contactId,
// });

// const filter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });

export default { addContact, delContact, filter };

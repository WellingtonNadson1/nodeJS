import { v4 as uuidv4 } from 'uuid';
import { users } from "../mocks/users.js";


// Create
export const createUser = (request, response) =>{
  const { body } = request;
  // const lastUser = users[users.length -1].id
  const newUser = {
    id:  uuidv4(),
    name: body.name,
    email: body.email,
    status: body.status 
  }
  users.push(newUser);
  response.send(201, newUser)
}


// Read
export const listUsers = (request, response) =>{
  const { order } = request.query;
  const sortedUsers = users.sort((a, b) =>{
    if (order === 'desc') {
      return a.id < b.id ? 1 : -1;
    }
    return a.id > b.id ? 1 : -1;
  })
  response.send(200, sortedUsers);
}

export const getUserById = (request, response) =>{
  const { id } = request.params;
  const user = users.find(user => user.id === id);

  if (!user) {
    return response.send(404, { error: 'User Not Found!'});
  }
  response.send(200, user);
  
}

// Update


// Delete
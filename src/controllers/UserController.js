import { v4 as uuidv4 } from 'uuid';
import { users } from "../mocks/users.js";
let usersIntern = users;


// Create
export const createUser = (request, response) =>{
  const { name, email, status } = request.body;
  // const lastUser = users[users.length -1].id
  const id = uuidv4();

  const existUserId = usersIntern.find(user => user.id === id);
  if (existUserId) {
    return createUser(request, response);
  }
  const newUser = {
    id:  id,
    name: name,
    email: email,
    status: status 
  }
  usersIntern.push(newUser);
  response.send(201, newUser)
}


// Read
export const listUsers = (request, response) =>{
  const { order } = request.query;
  const sortedUsers = usersIntern.sort((a, b) =>{
    if (order === 'desc') {
      return a.id < b.id ? 1 : -1;
    }
    return a.id > b.id ? 1 : -1;
  })
  response.send(200, sortedUsers);
}

export const getUserById = (request, response) =>{
  const { id } = request.params;
  const user = usersIntern.find(user => user.id === id);

  if (!user) {
    return response.send(404, { error: 'User Not Found!' });
  }
  response.send(200, user);
  
}

// Update
export const updateUser = (request, response) =>{
  const { id } = request.params;
  const { name, email, status } = request.body;

  const existUserId = usersIntern.find(user => user.id === id)

  if (!existUserId) {
    return response.send(404, { error : 'User not found' });
  }

  usersIntern = usersIntern.map(user => {
    if (user.id === id) {
      return {
        ...user,
        name,
        email,
        status
      }
    }
    return user;
  });
  response.send(201, { id, name, email, status })
}


// Delete
export const deleteUser = (request, response) => {
  const { id } = request.params;
  usersIntern = usersIntern.filter(user => user.id !== id);
  response.send(200);
}
import { createUser, deleteUser, getUserById, listUsers, updateUser } from "../controllers/UserController.js";

export const routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: getUserById
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: createUser
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: updateUser
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: deleteUser
  },
]
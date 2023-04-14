import { listUsers } from "../controllers/UserController.js";

export const routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: listUsers
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'UPDATE',
    handler: listUsers
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: listUsers
  },
]
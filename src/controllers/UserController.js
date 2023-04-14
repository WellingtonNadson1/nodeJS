import { users } from "../mocks/users.js";

// Create



// Read
export const listUsers = (request, response) =>{
  const { order } = request.query;
  const sortedUsers = users.sort((a, b) =>{
    if (order === 'desc') {
      return a.id < b.id ? 1 : -1;
    }
    return a.id > b.id ? 1 : -1;
  })
  response.writeHead(200, {'Content-type' : 'application/json'})
  response.end(JSON.stringify(users));
}

// Update


// Delete
import { baseUrl } from '../variables.js';

async function getUser(userName) {                                                                //function assincrona -> pode usa o .then
    const response = await fetch(`${baseUrl}/${userName}`);
    return await response.json();
    console.log(user)
}

export { getUser }
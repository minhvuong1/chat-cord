const users = [];

const addUser = ({ id, name, room }) => {
    // change to lowercase, and remove whitespaces
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // check if there is already existing user with new name
    const existingUser = users.find((user) => user.room === room & user.name === name)

    if (existingUser) {
        return { error: 'Username is taken' }
    }

    const user = { id, name, room };

    users.push(user)

    return { user }
}

const removeUser = (id) => {
    // check if there is a user with this index
    const index = users.findIndex((user) => user.id === id);

    // remove user from array
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);


const getUsersInRoom = (room) => users.filter((user) => user.room === room)

module.exports = { addUser, removeUser, getUser, getUsersInRoom }
export const FindUser = (userId, userList) => {
    return userList.find(user => user.id === userId)
};
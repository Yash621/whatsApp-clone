const getReciepientEmail = (users, userLoggedIn) => {
  console.log(users);
  return users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  )[0];
};
export default getReciepientEmail;

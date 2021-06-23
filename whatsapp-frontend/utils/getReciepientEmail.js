const getReciepientEmail = (users, userLoggedIn) => {
  const filter = users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.email
  );
  if (filter[1]) {
    if (filter[1] !== "yg17381@gmail.com") {
      return filter[1];
    }
  }
  return filter[0];
};
export default getReciepientEmail;

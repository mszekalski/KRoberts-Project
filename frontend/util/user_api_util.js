export const fetchAllUsers = () =>
  fetch({
    method: "GET",
    url: "api/users"
  });

export const fetchUser = id =>
  fetch({
    method: "GET",
    url: `api/users/${id}`
  });

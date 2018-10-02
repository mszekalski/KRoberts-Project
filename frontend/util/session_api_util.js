export const signup = user => {
  return fetch({
    type: "POST",
    url: `api/users`,
    data: { user }
  });
};

export const login = user => {
  return fetch({
    type: "POST",
    url: `api/session`,
    data: { user }
  });
};

export const logout = () => {
  return fetch({
    type: "DELETE",
    url: `api/session`
  });
};

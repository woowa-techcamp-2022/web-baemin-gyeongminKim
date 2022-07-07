const fakeUser = [
  {
    userId: 1,
    name: "경민",
    email: "a9120a@gmail.com",
    password: "0110",
  },
];

export const renderLoginPage = (req, res) => res.render("login");
export const renderErrorLoginPage = (req, res) =>
  res.render("login", { error: true });

export const checkFormData = (req, res, next) => {
  const { id, password } = req.body;
  const isId = id === "" ? false : true;
  const isPassword = password === "" ? false : true;

  if (isId && isPassword) {
    if (id === fakeUser[0].email || password === fakeUser[0].password) {
      return res.redirect(`/${fakeUser[0].userId}`);
    } //else return res.redirect("/login/error");
  } else return res.redirect("/login-error");
};

export const renderUserMainPage = (req, res) => {
  const { id } = req.params;

  const userName = fakeUser[id - 1].name;
  return res.render("main", { userName });
};

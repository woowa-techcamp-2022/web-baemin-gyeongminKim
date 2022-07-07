import db from "../database.js";

export const renderLoginPage = (req, res) => res.render("login");
export const renderErrorLoginPage = (req, res) =>
  res.render("login", { error: true });

export const checkFormData = (req, res, next) => {
  const { id, password } = req.body;
  const isId = id === "" ? false : true;
  const isPassword = password === "" ? false : true;

  if (isId && isPassword) {
    const { account } = db.data;
    const user = account.find((el) => el.email === id);
    if (id === user.email || password === user.password) {
      return res.redirect("/");
    } else return res.render("login", { error: true, id, password });
  }
  return res.render("login");
};

export const renderUserMainPage = (req, res) => {
  const { id } = req.params;

  const userName = account[id - 1].name;
  return res.render("main", { userName });
};

export const renderTermsPage = (req, res) => res.render("terms");
export const renderMobilePage = (req, res) => res.render("mobile");
export const renderUserInfoPage = (req, res) => res.render("userInfo");

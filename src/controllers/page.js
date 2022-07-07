export const mainPage = (req, res) => {
  let userName = "";
  if (req.session.user) {
    userName = req.session.user.name;
  }
  return res.render("main", { userName });
};

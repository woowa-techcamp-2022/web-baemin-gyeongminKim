export const login = (req, res) => {
  const { id, password } = req.body;
  return res.send(`${id}, ${password}`);
};

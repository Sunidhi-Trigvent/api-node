export default async (req, res) => {
  const { user } = req;
  res.send("hello from get", user);
};

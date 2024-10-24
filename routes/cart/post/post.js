export default async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    res.send("hello from post ");
  } catch (error) {
    res.status(403).send(error);
  }
};

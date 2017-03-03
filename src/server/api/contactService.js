const service = async (req, res) => {

  console.log(req.body);

  const response = { lala: 'land' };
  res.json(response);
};

export default service;


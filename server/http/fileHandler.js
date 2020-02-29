module.exports = service => {
  const fileHandler = async function(req, res, _next) {
    try {
      const result = await service.processFile(req.files);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).send({ error });
    }
  };

  return {
    fileHandler,
  };
};

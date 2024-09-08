function productController(req, res) {
    
  return res.json({ msg: "product", id: req.params.id });
}

module.exports = {
  productController,
};

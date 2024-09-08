function categoryController(req, res) {
    
    return res.json({ msg: "category", id: req.params.id });
  }

module.exports={
    categoryController
}
const index = (req, res) => {
  res.render('index', {title: "Exprechoo en Main"})
}

module.exports = {
  index
}
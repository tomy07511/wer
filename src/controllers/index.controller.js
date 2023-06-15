

const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrl.renderAbout = (req, res) => {
  res.render('about');
};

indexCtrl.renderHome = (req, res) => {
  res.render('');
};
indexCtrl.renderforma = (req, res) => {
  res.render('forma');
};
indexCtrl.renderpdff = (req, res) => {
  res.render('pdff');
};


module.exports = indexCtrl;
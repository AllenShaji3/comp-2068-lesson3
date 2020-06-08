const viewPath = ('pages');

exports.home = (req, res) => {
res.render(`${viewPath}/home`, {pageTitle: 'Welcome home Local'});
    
};
exports.about = (req,res) => {
    res.render(`${viewPath}/about`);
};
exports.contact = (req,res) => {
    res.render(`${viewPath}/contact`,{pageTitle: 'Contact'});
}
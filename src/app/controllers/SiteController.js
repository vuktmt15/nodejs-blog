class SiteController {
    home(req, res) {
        res.render('home')
    }
    new(req, res) {
        res.render('news')
    }
}

module.exports = new SiteController
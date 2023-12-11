
const adminControllers = {
    adminView: (req, res) => {
        res.render('pages/admin.ejs')
    },
    adminCreateView: (req, res) => {
        res.render('pages/create.ejs')
    },
    adminCreatePost: (req, res) => { res.send('Route for Post Admin Create View') },

    adminEditIdView: (req, res) => { res.send('Route for Admin Edit View') },
    adminEditPutView: (req, res) => { res.send('Route for Admin Edit Put View') },

    adminDeleteIdView: (req, res) => { res.send('Route for Admin Delete View') },

}

module.exports = adminControllers
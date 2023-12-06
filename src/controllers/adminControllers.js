const ejs = require('ejs');
const { resolve } = require('path');


const adminControllers = {
    adminView: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/admin.ejs');
        res.send(index)
    },
    adminCreateView: async (req, res) => {
        const index = await ejs.renderFile(resolve() + '/src/views/pages/create.ejs');
        res.send(index)
    },
    adminCreatePost: (req, res) => { res.send('Route for Post Admin Create View') },

    adminEditIdView: (req, res) => { res.send('Route for Admin Edit View') },
    adminEditPutView: (req, res) => { res.send('Route for Admin Edit Put View') },

    adminDeleteIdView: (req, res) => { res.send('Route for Admin Delete View') },

}

module.exports = adminControllers
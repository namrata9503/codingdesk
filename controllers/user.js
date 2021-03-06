const User = require('../models/User')

exports.getAllUsers = (request, response) => {


    User.find({}, (error, users) => {

        if (error) {
            response.json({
                message: "Server error, Please try after some time.",
                status: 500
            })
        }
        if (users) {
            response.json({
                data: users,
                message: "users data fetched",
                status: 200
            })
        }
        else {
            response.json({

                message: "No data found",
                status: 200
            })
        }

    })


}

exports.getUserById = (request, response) => {
    User.findById(request.params.id, (error, users) => {

        if (error) {
            response.json({
                message: "Server error, Please try later.",
                status: 500
            })
        }
        if (users) {
            response.json({
                data: users,
                message: request.params.id + " user id fetched",
                status: 200
            })
        }
        else {
            response.json({
                message: "Not found",
                status: 200
            })
        }
    })
}

exports.postUser = (request, response) => {

    console.log(request.body);
    let user = new User({
        username: request.body.username,
        email: request.body.email,
        createdAt: request.body.createdAt,
        firstName: request.body.firstName

    })
    user.save().then((user) => {
        console.log('user Added')
        response.json(user)
    })
}

exports.updateUser = (request, response) => {
    console.log(request.body);
    let {
        username, email, firstName, createdAt
    } = request.body;
    User.updateOne({ _id: request.params.id }, {
        username, email, firstName, createdAt
    }, {}, (error, user) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })

        response.json(user)
    });
}
exports.deleteUser = (request, response) => {
    User.findByIdAndDelete({ _id: request.params.id }, (error, id) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })
        response.json("deleted" + id)
        console.log("deleted")
    })
}
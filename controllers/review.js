const Review = require('../models/Review')


exports.getAllReviews = (request, response) => {


    Review.find({}, (error, reviews) => {

        if (error) {
            response.json({
                message: "Server error, Please try after some time.",
                status: 500
            })
        }
        if (reviews) {
            response.json({
                data: reviews,
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

exports.getReviewById = (request, response) => {
    Review.findById(request.params.id, (error, reviews) => {

        if (error) {
            response.json({
                message: "Server error, Please try later.",
                status: 500
            })
        }
        if (reviews) {
            response.json({
                data: reviews,
                message: request.params.id + " review id fetched",
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

exports.postReview = (request, response) => {
    console.log(request.body);
    let {
        title, description
    } = request.body;

    var review = new Review({
        title, description
    });
    review.save().then((review) => {
        console.log('Added');
        response.json(review);
    });
}

exports.updateReview = (request, response) => {
    console.log(request.body);
    let {
        title, description
    } = request.body;
    Review.updateOne({ _id: request.params.id }, {
        title, description
    }, {}, (error, review) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })

        response.json(review)
        console.log("updated")
    });
}
exports.deleteReview = (request, response) => {
    Review.findByIdAndDelete({ _id: request.params.id }, (error, id) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })
        response.json("deleted" + id)
        console.log("deleted")
    })
}
const Page = require('../models/Page')


exports.getAllPages = (request, response) => {


    Page.find({}, (error, pages) => {

        if (error) {
            response.json({
                message: "Server error, Please try after some time.",
                status: 500
            })
        }
        if (pages) {
            response.json({
                data: pages,
                message: "blogs data fetched",
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

exports.getPageById = (request, response) => {
    Page.findById(request.params.id, (error, pages) => {

        if (error) {
            response.json({
                message: "Server error, Please try later.",
                status: 500
            })
        }
        if (pages) {
            response.json({
                data: pages,
                message: request.params.id + " page id fetched",
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

exports.postPage = (request, response) => {
    console.log(request.body);
    // let {
    //     autherName, title,description
    // } = request.body;

    var page = new Page({
        body : request.body.body,
         title : request.body.title,
         slug : request.body.slug
    });
    page.save().then((page) => {
        console.log('Added');
        response.json(page);
    });
}

exports.updatePage = (request, response) => {
    console.log(request.body);
    let {
        autherName, title,description
    } = request.body;
    Page.updateOne({ _id: request.params.id }, {
        autherName, title,description
    }, {}, (error, page) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })

        response.json(page)
        console.log("updated")
    });
}
exports.deletePage = (request, response) => {
    Page.findByIdAndDelete({ _id: request.params.id }, (error, id) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })
        response.json("deleted" + id)
        console.log("deleted")
    })
}
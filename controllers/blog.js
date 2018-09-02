const Blog = require('../models/Blog')


exports.getAllBlogs = (request, response) => {


    Blog.find({}, (error, blogs) => {

        if (error) {
            response.json({
                message: "Server error, Please try after some time.",
                status: 500
            })
        }
        if (blogs) {
            response.json({
                data: blogs,
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

exports.getBlogById = (request, response) => {
    Blog.findById(request.params.id, (error, blogs) => {

        if (error) {
            response.json({
                message: "Server error, Please try later.",
                status: 500
            })
        }
        if (blogs) {
            response.json({
                data: blogs,
                message: request.params.id + " blog id fetched",
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

exports.postBlog = (request, response) => {
    console.log(request.body);
    // let {
    //     autherName, title,description
    // } = request.body;

    var blog = new Blog({
        autherName : request.body.autherName,
         title : request.body.title,
         description : request.body.description
    });
    blog.save().then((blog) => {
        console.log('Added');
        response.json(blog);
    });
}

exports.updateBlog = (request, response) => {
    console.log(request.body);
    let {
        autherName, title,description
    } = request.body;
    Blog.updateOne({ _id: request.params.id }, {
        autherName, title,description
    }, {}, (error, blog) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })

        response.json(blog)
        console.log("updated")
    });
}
exports.deleteBlog = (request, response) => {
    Blog.findByIdAndDelete({ _id: request.params.id }, (error, id) => {
        if (error)
            response.json({

                message: "Server error, Please try later.",
                status: 500
            })
        response.json("deleted" + id)
        console.log("deleted")
    })
}
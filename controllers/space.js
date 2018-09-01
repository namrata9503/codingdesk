const Space = require('../models/Space')


exports.getAllSpaces = (request, response) => {

    Space.find({}, (error, spaces) => {

        if (error) {
            response.json({
                message: "Server error, Please try after some time.",
                status: 500
            })
        }
        if (spaces) {
            response.json({
                data: spaces,
                message: "Space data fetched",
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

exports.getSpaceById = (request, response) => {

    Space.findById( request.params.id , (error, spaces) => {

        if(error){
            response.json({
            message : "Server error, Please try later.",
            status : 404
            })
        }
        if(spaces){
            response.json({
                data : spaces,
                message : "Space id fetched",
                status : 200
            })
        }
        else{
            response.json({
                message : "Not found",
                status : 200
            })
        }
    })


}
exports.postCreateNewSpace = (request, response) => {
    console.log(request.body);
  let {
    name,
    slug,
    amanities,
    size,
    address,
    timing,
    social,
    createdAt,
    createdBy
  } = request.body;

  var space = new Space({
    name,
    slug,
    amanities,
    size,
    address,
    timing,
    social,
    createdAt,
    createdBy
  });
  space.save().then((space) => {
    console.log('Added successfully');
    response.json(space);
  });
}

exports.putUpdateSpace = () => {

}

exports.deleteSpace = () => {

}

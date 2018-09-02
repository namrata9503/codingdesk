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
 // var limit = parseInt(request.body.limit) ||10;

    // var query =  Space.find().limit(limit);
    // console.log(query);

    // if(request.query.name){
    //     query.where({name : request.query.name})
    // }
    // if(request.query.city){
    //     query.where(address.city).equals(request.query.city)
    // }
    // query.exec((error, space)=>{
    //     if (error) 
    //         response.json({
    //             message: "Server error, Please try after some time.",
    //             status: 500
    //         })
        
    //     response.json(space)
    // })
exports.getSpaceById = (request, response) => {

    Space.findById(request.params.id, (error, spaces) => {

        if (error) {
            response.json({
                message: "Server error, Please try later.",
                status: 500
            })
        }
        if (spaces) {
            response.json({
                data: spaces,
                message: request.params.id + " Space id fetched",
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
exports.postCreateNewSpace = (request, response) => {
    
    console.log(request.body);
    let space = new Space({
      name: request.body.name,
      slug: request.body.slug,
      amanaties: request.body.amanaties,
      size: request.body.size,
      address: request.body.address,
      description: request.body.description,
      timing: request.body.timing,
      social: request.body.social,
      createdBy: request.body.createdBy,
      review: request.body.review
    })
    space.save().then((space) => {
      console.log('Space Added')
      response.json(space)
    })
}

exports.putUpdateSpace = (request, response) => {
    console.log(request.body);
    let {
        name, slug, amanities, size, address, timing, social, createdAt, createdBy
    } = request.body;
    Space.updateOne({ _id: request.params.id }, {
        name, slug, amanities, size, address, timing, social, createdAt, createdBy
    }, {}, (error, space) => {
        if(error) 
            response.json({
                
                message: "Server error, Please try later.",
                status: 500
            })
        
        response.json(space)
    });
}

exports.deleteSpace = (request, response) => {

    Space.findByIdAndDelete({_id : request.params.id},(error,id)=>{
        if(error) 
        response.json({
            
            message: "Server error, Please try later.",
            status: 500
        })
        response.json("deleted"+id)
    })
}

const { StatusCodes } = require("http-status-codes")
const BaseError= require("./base.error")

class InternalServerError extends BaseError{
    constructor(details){
        super("Badrequest",StatusCodes.INTERNAL_SERVER_ERROR,"Something went Wrong",details)
    }

}
module.exports=InternalServerError
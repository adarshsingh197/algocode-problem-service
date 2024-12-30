const { StatusCodes } = require("http-status-codes")
const BaseError= require("./base.error")

class BadRequest extends BaseError{
    constructor(propertyName,details){
        super("Badrequest",StatusCodes.BadRequest,`Invalid structure for ${propertyName}`,details)
    }

}
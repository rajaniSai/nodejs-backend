
const userModel = require("../models/userModel")

const createUser = async (req, res, next) => {
    console.log("in crete user", req.body);
    try {
        const { name, dob, address } = req.body;

        const response = await userModel.create({
            name, dob, address
        })

        console.log("response=>", response)
        if (response) {
            res.status(200).json({
                success: true,
                status: 200,
                message: "user created successfully",
                data: response
            })
        } else {
            res.status(400);
            throw new Error("user not created")
        }

    } catch (error) {
        console.log("error=>", error);
        next(error);
    }

}

module.exports = {
    createUser
}
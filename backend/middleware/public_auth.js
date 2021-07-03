import jwt from 'jsonwebtoken'
import { Customer } from '../models/authModels/customer.model'
import { JWT_SECRET } from '../config/keys'

export const public_aut = (req, res, next) => {
    const { authorization } = req.headers
    //authorization === Bearer ewefwegwrherhe
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be logged in" })
        }

        const { _id } = payload
        Customer.findById(_id).then(userdata => {
            req.user = userdata
            next()
        })
    })
}
import validateRegister from '../validateSchema/registerSchema.js'
import addFormats from 'ajv-formats'
import Ajv from 'ajv'
const ajv = new Ajv({ allErrors: true, jsonPointers: true })
addFormats(ajv)

export default {
  execute: (req, res, next) => {
    const user = req.body
    const userValidate = ajv.compile(validateRegister)
    const validateUser = userValidate(user)

    if (!validateUser) {
      return res.status(400).json({ message: userValidate.errors })
    }
    return next()
  }
}

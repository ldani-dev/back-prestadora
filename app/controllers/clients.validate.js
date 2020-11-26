const { check } = require('express-validator')
const isDate = require('lodash.isdate')
const { validationResult } = require('../middleware/utils')
/**
 * Validates create new item request
 */
exports.createItem = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('lastName')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('phone')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('address')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('document')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
  check('interes')
    .exists()
    .withMessage('MISSING')
    .isNumeric()
    .withMessage('ISNOT NUMERIC')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('amount')
    .exists()
    .withMessage('MISSING')
    .isNumeric()
    .withMessage('ISNOT NUMERIC')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('dateBegin')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .custom((v) =>
      v.match(/^(0[1-9]|1[0-2])(\/|-)([0-2][0-9]|3[0-1])\2(\d{4})$/)
        ? v
        : v === ''
    )
    .withMessage('INVALIDATED_DATE')
    .trim(),
  check('jobRank')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('addressJob')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('sectionJob')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('references')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('customData').optional(),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates update item request
 */
exports.updateItem = [
  check('name')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('lastName')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('phone')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('address')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('document')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('email')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isEmail()
    .withMessage('EMAIL_IS_NOT_VALID'),
  check('interes')
    .exists()
    .withMessage('MISSING')
    .isNumeric()
    .withMessage('ISNOT NUMERIC')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('amount')
    .exists()
    .withMessage('MISSING')
    .isNumeric()
    .withMessage('ISNOT NUMERIC')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('dateBegin')
    .exists()
    .custom(isDate({ format: 'DD-MM-YYYY' }))
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  // check('travelerBirthDay')
  // .exists()
  // .withMessage('MISSING')
  // .not()
  // .isEmpty()
  // .withMessage('IS_EMPTY')
  // .custom(v =>
  //     v.match(/^(0[1-9]|1[0-2])(\/|-)([0-2][0-9]|3[0-1])\2(\d{4})$/) ? v : v === '')
  // .withMessage('INVALIDATED_DATE')
  // .trim(),
  check('jobRank')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('addressJob')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('sectionJob')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('references')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates get item request
 */
exports.getItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

/**
 * Validates delete item request
 */
exports.deleteItem = [
  check('id')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validationResult(req, res, next)
  }
]

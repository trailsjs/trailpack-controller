'use strict'

const Controller = require('trails-controller')

/**
 * Trails Controller Class.
 */
module.exports = class TrailpackController extends Controller {
  constructor (app) {
    super(app)
    this.isUnified = true
  }
}

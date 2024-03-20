const express = require('express')
const pathToRegexp = require('path-to-regexp')
const queryString = require('query-string')

// A basic example of the celestial-glow-router functionality
class CelestialGlowRouter {
  constructor () {
    this.routes = {}
  }

  addRoute (path, action) {
    this.routes[path] = action
  }

  navigate (path) {
    if (path in this.routes) {
      this.routes[path]()
    } else {
      console.log(`Path ${path} does not exist.`)
    }
  }
}

module.exports = CelestialGlowRouter;

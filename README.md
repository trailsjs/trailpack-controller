# trailpack-controller

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Trailpack controller Class. Exposes Trails Application resources to the class instances.
 
Trailpack controllers should extend this class, it allow you to use hapi API interface for all webserver compatible 
(currently trailpack-hapi and trailpack-express).  

For basic Trails controllers you should use [trails-controller](https://github.com/trailsjs/trails-controller).

## Usage

```js
const Controller = require('trailpack-controller')

class MyController extends Controller {
  controllerMethod (request, reply) {
    // ...
  }
}
```

#### Install

## License
[MIT](https://github.com/trailsjs/trails/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trailpack-controller.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trailpack-controller
[ci-image]: https://img.shields.io/travis/trailsjs/trailpack-controller/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trailpack-controller
[daviddm-image]: http://img.shields.io/david/trailsjs/trailpack-controller.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trailpack-controller
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trailpack-controller.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trailpack-controller
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trailpack-controller
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs


/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n// canvas\nconst canvas = document.getElementById(\"game-canvas\");\ncanvas.setAttribute(\"width\", window.innerWidth);\ncanvas.setAttribute(\"height\", window.innerHeight);\nconst ctx = canvas.getContext(\"2d\");\n\n// running the game\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.start(ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFDbEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyREYsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFQyxNQUFNLENBQUNDLFVBQVUsQ0FBQztBQUMvQ0wsTUFBTSxDQUFDRyxZQUFZLENBQUMsUUFBUSxFQUFFQyxNQUFNLENBQUNFLFdBQVcsQ0FBQztBQUNqRCxNQUFNQyxHQUFHLEdBQUdQLE1BQU0sQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQzs7QUFFbkM7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSVYscURBQUksQ0FBQ0MsTUFBTSxDQUFDO0FBQzdCUyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0YXJ5ZGV2YXN0YXRpb24vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIjtcbi8vIGNhbnZhc1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCB3aW5kb3cuaW5uZXJXaWR0aCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBydW5uaW5nIHRoZSBnYW1lXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcbmdhbWUuc3RhcnQoY3R4KTsiXSwibmFtZXMiOlsiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/asteroid.js":
/*!*********************************!*\
  !*** ./src/scripts/asteroid.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Asteroid; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super({\n      pos: options.pos,\n      vel: Utils.randomVec(0.5),\n      radius: 20,\n      game: options.game\n    });\n  }\n  collideWith(otherObj) {\n    this.consumes(otherObj);\n    this.game.remove(otherObj);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hc3Rlcm9pZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsdUNBQVMsQ0FBQztBQUVqQixNQUFNQyxRQUFRLFNBQVNILHNEQUFZLENBQUM7RUFDakRJLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO0lBQ25CLEtBQUssQ0FBQztNQUNKQyxHQUFHLEVBQUVELE9BQU8sQ0FBQ0MsR0FBRztNQUNoQkMsR0FBRyxFQUFFTixLQUFLLENBQUNPLFNBQVMsQ0FBQyxHQUFHLENBQUM7TUFDekJDLE1BQU0sRUFBRSxFQUFFO01BQ1ZDLElBQUksRUFBRUwsT0FBTyxDQUFDSztJQUNoQixDQUFDLENBQUM7RUFDSjtFQUVBQyxXQUFXLENBQUNDLFFBQVEsRUFBRTtJQUNwQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsUUFBUSxDQUFDO0lBQ3ZCLElBQUksQ0FBQ0YsSUFBSSxDQUFDSSxNQUFNLENBQUNGLFFBQVEsQ0FBQztFQUM1QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0YXJ5ZGV2YXN0YXRpb24vLi9zcmMvc2NyaXB0cy9hc3Rlcm9pZC5qcz9hNzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXN0ZXJvaWQgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgcG9zOiBvcHRpb25zLnBvcyxcbiAgICAgIHZlbDogVXRpbHMucmFuZG9tVmVjKDAuNSksXG4gICAgICByYWRpdXM6IDIwLFxuICAgICAgZ2FtZTogb3B0aW9ucy5nYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgY29sbGlkZVdpdGgob3RoZXJPYmopIHtcbiAgICB0aGlzLmNvbnN1bWVzKG90aGVyT2JqKTtcbiAgICB0aGlzLmdhbWUucmVtb3ZlKG90aGVyT2JqKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWxzIiwicmVxdWlyZSIsIkFzdGVyb2lkIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFuZG9tVmVjIiwicmFkaXVzIiwiZ2FtZSIsImNvbGxpZGVXaXRoIiwib3RoZXJPYmoiLCJjb25zdW1lcyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/asteroid.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/scripts/asteroid.js\");\n\nclass Game {\n  constructor(canvas) {\n    this.DIM_X = canvas.width;\n    this.DIM_Y = canvas.height;\n    this.NUM_OBJECTS = 100;\n    this.objects = [];\n    this.addObjects();\n  }\n  addObjects() {\n    while (this.objects.length < this.NUM_OBJECTS) {\n      const asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: this.randomPosition(),\n        game: this\n      });\n      this.objects.push(asteroid);\n    }\n  }\n  randomPosition() {\n    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    this.objects.forEach(object => {\n      object.draw(ctx);\n    });\n  }\n  moveObjects() {\n    this.objects.forEach(object => {\n      object.move();\n      object.pos = this.wrap(object.pos);\n    });\n  }\n  checkCollisions() {\n    for (let i = 1; i < this.objects.length; i++) {\n      for (let j = 0; j < i; j++) {\n        if (this.objects[i].isCollidedWith(this.objects[j])) {\n          this.objects[i].collideWith(this.objects[j]);\n          break;\n        }\n      }\n    }\n  }\n  remove(obj) {\n    this.objects.splice(this.objects.indexOf(obj), 1);\n  }\n  step() {\n    this.checkCollisions();\n    this.moveObjects();\n  }\n  start(ctx) {\n    setInterval(() => {\n      this.step();\n      this.draw(ctx);\n    }, 20);\n  }\n  wrap(pos) {\n    let res = [pos[0], pos[1]];\n    if (pos[0] < 0) {\n      res[0] = this.DIM_X;\n    } else if (pos[0] > this.DIM_X) {\n      res[0] = 0;\n    }\n    if (pos[1] < 0) {\n      res[1] = this.DIM_Y;\n    } else if (pos[1] > this.DIM_Y) {\n      res[1] = 0;\n    }\n    return res;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ2pCLElBQUksQ0FBQ0MsR0FBRyxDQUFDO0lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDUjtFQUVBTSxJQUFJLENBQUNiLEdBQUcsRUFBRTtJQUNSLElBQUkwQixHQUFHLEdBQUcsQ0FBQzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUlBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDZDBCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNuQyxLQUFLO0lBQ3JCLENBQUMsTUFBTSxJQUFJUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDVCxLQUFLLEVBQUU7TUFDOUJtQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNaO0lBQ0EsSUFBSTFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDZDBCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNqQyxLQUFLO0lBQ3JCLENBQUMsTUFBTSxJQUFJTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDUCxLQUFLLEVBQUU7TUFDOUJpQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNaO0lBQ0EsT0FBT0EsR0FBRztFQUNaO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuZXRhcnlkZXZhc3RhdGlvbi8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXN0ZXJvaWQgZnJvbSBcIi4vYXN0ZXJvaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHRoaXMuRElNX1ggPSBjYW52YXMud2lkdGg7XG4gICAgdGhpcy5ESU1fWSA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgdGhpcy5OVU1fT0JKRUNUUyA9IDEwMDtcbiAgICB0aGlzLm9iamVjdHMgPSBbXTtcbiAgICB0aGlzLmFkZE9iamVjdHMoKTtcbiAgfVxuXG4gIGFkZE9iamVjdHMoKSB7XG4gICAgd2hpbGUgKHRoaXMub2JqZWN0cy5sZW5ndGggPCB0aGlzLk5VTV9PQkpFQ1RTKSB7XG4gICAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBBc3Rlcm9pZCh7XG4gICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLFxuICAgICAgICBnYW1lOiB0aGlzLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm9iamVjdHMucHVzaChhc3Rlcm9pZCk7XG4gICAgfVxuICB9XG5cbiAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIFtNYXRoLnJhbmRvbSgpICogdGhpcy5ESU1fWCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuRElNX1ldO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgfSk7XG4gIH1cblxuICBtb3ZlT2JqZWN0cygpIHtcbiAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QubW92ZSgpO1xuICAgICAgb2JqZWN0LnBvcyA9IHRoaXMud3JhcChvYmplY3QucG9zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrQ29sbGlzaW9ucygpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqKyspIHtcbiAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tpXS5pc0NvbGxpZGVkV2l0aCh0aGlzLm9iamVjdHNbal0pKSB7XG4gICAgICAgICAgdGhpcy5vYmplY3RzW2ldLmNvbGxpZGVXaXRoKHRoaXMub2JqZWN0c1tqXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUob2JqKSB7XG4gICAgdGhpcy5vYmplY3RzLnNwbGljZSh0aGlzLm9iamVjdHMuaW5kZXhPZihvYmopLCAxKTtcbiAgfVxuXG4gIHN0ZXAoKSB7XG4gICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoKTtcbiAgICB0aGlzLm1vdmVPYmplY3RzKCk7XG4gIH1cblxuICBzdGFydChjdHgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnN0ZXAoKTtcbiAgICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIH0sIDIwKTtcbiAgfVxuXG4gIHdyYXAocG9zKSB7XG4gICAgbGV0IHJlcyA9IFtwb3NbMF0sIHBvc1sxXV07XG4gICAgaWYgKHBvc1swXSA8IDApIHtcbiAgICAgIHJlc1swXSA9IHRoaXMuRElNX1g7XG4gICAgfSBlbHNlIGlmIChwb3NbMF0gPiB0aGlzLkRJTV9YKSB7XG4gICAgICByZXNbMF0gPSAwO1xuICAgIH1cbiAgICBpZiAocG9zWzFdIDwgMCkge1xuICAgICAgcmVzWzFdID0gdGhpcy5ESU1fWTtcbiAgICB9IGVsc2UgaWYgKHBvc1sxXSA+IHRoaXMuRElNX1kpIHtcbiAgICAgIHJlc1sxXSA9IDA7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBc3Rlcm9pZCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsIkRJTV9YIiwid2lkdGgiLCJESU1fWSIsImhlaWdodCIsIk5VTV9PQkpFQ1RTIiwib2JqZWN0cyIsImFkZE9iamVjdHMiLCJsZW5ndGgiLCJhc3Rlcm9pZCIsInBvcyIsInJhbmRvbVBvc2l0aW9uIiwiZ2FtZSIsInB1c2giLCJNYXRoIiwicmFuZG9tIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZvckVhY2giLCJvYmplY3QiLCJtb3ZlT2JqZWN0cyIsIm1vdmUiLCJ3cmFwIiwiY2hlY2tDb2xsaXNpb25zIiwiaSIsImoiLCJpc0NvbGxpZGVkV2l0aCIsImNvbGxpZGVXaXRoIiwicmVtb3ZlIiwib2JqIiwic3BsaWNlIiwiaW5kZXhPZiIsInN0ZXAiLCJzdGFydCIsInNldEludGVydmFsIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.game = options.game;\n  }\n  draw(ctx) {\n    ctx.fillStyle = \"white\";\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  isCollidedWith(otherObj) {\n    return Utils.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius;\n  }\n  consumes(otherObj) {\n    const sumOfAreas = Math.PI * this.radius ** 2 + Math.PI * otherObj.radius ** 2;\n    this.radius = Math.sqrt(sumOfAreas / Math.PI);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsdUNBQVMsQ0FBQztBQUNqQixNQUFNQyxZQUFZLENBQUM7RUFDaENDLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO0lBQ25CLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO0lBQzVCLElBQUksQ0FBQ0MsSUFBSSxHQUFHSixPQUFPLENBQUNJLElBQUk7RUFDMUI7RUFFQUMsSUFBSSxDQUFDQyxHQUFHLEVBQUU7SUFDUkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsT0FBTztJQUN2QkQsR0FBRyxDQUFDRSxTQUFTLEVBQUU7SUFDZkYsR0FBRyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDUixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBR08sSUFBSSxDQUFDQyxFQUFFLENBQUM7SUFDOURMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFO0VBQ1o7RUFFQUMsSUFBSSxHQUFHO0lBQ0wsSUFBSSxDQUFDWixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM1QjtFQUVBWSxjQUFjLENBQUNDLFFBQVEsRUFBRTtJQUN2QixPQUFPbkIsS0FBSyxDQUFDb0IsUUFBUSxDQUFDLElBQUksQ0FBQ2YsR0FBRyxFQUFFYyxRQUFRLENBQUNkLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ0UsTUFBTSxHQUFHWSxRQUFRLENBQUNaLE1BQU07RUFDL0U7RUFFQWMsUUFBUSxDQUFDRixRQUFRLEVBQUU7SUFDakIsTUFBTUcsVUFBVSxHQUFHUixJQUFJLENBQUNDLEVBQUUsR0FBSSxJQUFJLENBQUNSLE1BQU0sSUFBSSxDQUFFLEdBQUdPLElBQUksQ0FBQ0MsRUFBRSxHQUFJSSxRQUFRLENBQUNaLE1BQU0sSUFBSSxDQUFFO0lBQ2xGLElBQUksQ0FBQ0EsTUFBTSxHQUFHTyxJQUFJLENBQUNTLElBQUksQ0FBQ0QsVUFBVSxHQUFHUixJQUFJLENBQUNDLEVBQUUsQ0FBQztFQUMvQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0YXJ5ZGV2YXN0YXRpb24vLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzP2MyMDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICB9XG5cbiAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmopIHtcbiAgICByZXR1cm4gVXRpbHMuZGlzdGFuY2UodGhpcy5wb3MsIG90aGVyT2JqLnBvcykgPCB0aGlzLnJhZGl1cyArIG90aGVyT2JqLnJhZGl1cztcbiAgfVxuXG4gIGNvbnN1bWVzKG90aGVyT2JqKSB7XG4gICAgY29uc3Qgc3VtT2ZBcmVhcyA9IE1hdGguUEkgKiAodGhpcy5yYWRpdXMgKiogMikgKyBNYXRoLlBJICogKG90aGVyT2JqLnJhZGl1cyAqKiAyKTtcbiAgICB0aGlzLnJhZGl1cyA9IE1hdGguc3FydChzdW1PZkFyZWFzIC8gTWF0aC5QSSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiVXRpbHMiLCJyZXF1aXJlIiwiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiZ2FtZSIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwibW92ZSIsImlzQ29sbGlkZWRXaXRoIiwib3RoZXJPYmoiLCJkaXN0YW5jZSIsImNvbnN1bWVzIiwic3VtT2ZBcmVhcyIsInNxcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(module) {

eval("const Utils = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return [Math.sin(deg) * length, Math.cos(deg) * length];\n  },\n  distance(pos1, pos2) {\n    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);\n  }\n};\nmodule.exports = Utils;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm5hbWVzIjpbIlV0aWxzIiwicmFuZG9tVmVjIiwibGVuZ3RoIiwiZGVnIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwic2luIiwiY29zIiwiZGlzdGFuY2UiLCJwb3MxIiwicG9zMiIsInNxcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuZXRhcnlkZXZhc3RhdGlvbi8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzP2RiMTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXRpbHMgPSB7XG4gIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgICBjb25zdCBkZWcgPSAyICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgcmV0dXJuIFtNYXRoLnNpbihkZWcpICogbGVuZ3RoLCBNYXRoLmNvcyhkZWcpICogbGVuZ3RoXTtcbiAgfSxcbiAgZGlzdGFuY2UocG9zMSwgcG9zMikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoKHBvczFbMF0gLSBwb3MyWzBdKSAqKiAyICsgKHBvczFbMV0gLSBwb3MyWzFdKSAqKiAyKTtcbiAgfSxcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFLLEdBQUc7RUFDWkMsU0FBUyxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxFQUFFLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDRyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxHQUFHRCxNQUFNLEVBQUVFLElBQUksQ0FBQ0ksR0FBRyxDQUFDTCxHQUFHLENBQUMsR0FBR0QsTUFBTSxDQUFDO0VBQ3pELENBQUM7RUFDRE8sUUFBUSxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRTtJQUNuQixPQUFPUCxJQUFJLENBQUNRLElBQUksQ0FBQyxDQUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3ZFO0FBQ0YsQ0FBQztBQUVERSxNQUFNLENBQUNDLE9BQU8sR0FBR2QsS0FBSyJ9\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuZXRhcnlkZXZhc3RhdGlvbi8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;
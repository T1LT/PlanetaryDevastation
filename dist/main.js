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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n// canvas\nconst canvas = document.getElementById(\"game-canvas\");\ncanvas.setAttribute(\"width\", window.innerWidth - 50);\ncanvas.setAttribute(\"height\", window.innerHeight - 150);\nconst ctx = canvas.getContext(\"2d\");\n\n// mouse movement listener\nconst mousePos = [];\ncanvas.addEventListener(\"mousemove\", event => {\n  event.preventDefault();\n  event.stopPropagation();\n  mousePos[0] = event.clientX;\n  mousePos[1] = event.clientY;\n});\n\n// running the game\nconst game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\ngame.start(ctx, mousePos);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFDbEM7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztBQUNyREYsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDcERMLE1BQU0sQ0FBQ0csWUFBWSxDQUFDLFFBQVEsRUFBRUMsTUFBTSxDQUFDRSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3ZELE1BQU1DLEdBQUcsR0FBR1AsTUFBTSxDQUFDUSxVQUFVLENBQUMsSUFBSSxDQUFDOztBQUVuQztBQUNBLE1BQU1DLFFBQVEsR0FBRyxFQUFFO0FBQ25CVCxNQUFNLENBQUNVLGdCQUFnQixDQUFDLFdBQVcsRUFBR0MsS0FBSyxJQUFLO0VBQzlDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtFQUN0QkQsS0FBSyxDQUFDRSxlQUFlLEVBQUU7RUFDdkJKLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBR0UsS0FBSyxDQUFDRyxPQUFPO0VBQzNCTCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUdFLEtBQUssQ0FBQ0ksT0FBTztBQUM3QixDQUFDLENBQUM7O0FBRUY7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSWpCLHFEQUFJLENBQUNDLE1BQU0sQ0FBQztBQUM3QmdCLElBQUksQ0FBQ0MsS0FBSyxDQUFDVixHQUFHLEVBQUVFLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYW5ldGFyeWRldmFzdGF0aW9uLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCI7XG4vLyBjYW52YXNcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgd2luZG93LmlubmVyV2lkdGggLSA1MCk7XG5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHdpbmRvdy5pbm5lckhlaWdodCAtIDE1MCk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBtb3VzZSBtb3ZlbWVudCBsaXN0ZW5lclxuY29uc3QgbW91c2VQb3MgPSBbXTtcbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbW91c2VQb3NbMF0gPSBldmVudC5jbGllbnRYO1xuICBtb3VzZVBvc1sxXSA9IGV2ZW50LmNsaWVudFk7XG59KTtcblxuLy8gcnVubmluZyB0aGUgZ2FtZVxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XG5nYW1lLnN0YXJ0KGN0eCwgbW91c2VQb3MpO1xuIl0sIm5hbWVzIjpbIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1vdXNlUG9zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGllbnRYIiwiY2xpZW50WSIsImdhbWUiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/asteroid.js":
/*!*********************************!*\
  !*** ./src/scripts/asteroid.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Asteroid; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super({\n      pos: options.pos,\n      vel: Utils.randomVec(0.025),\n      radius: options.radius,\n      game: options.game\n    });\n  }\n  collideWith(otherObj) {\n    this.consumes(otherObj);\n    this.game.remove(otherObj);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hc3Rlcm9pZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUMzQyxNQUFNQyxLQUFLLEdBQUdDLG1CQUFPLENBQUMsdUNBQVMsQ0FBQztBQUVqQixNQUFNQyxRQUFRLFNBQVNILHNEQUFZLENBQUM7RUFDakRJLFdBQVcsQ0FBQ0MsT0FBTyxFQUFFO0lBQ25CLEtBQUssQ0FBQztNQUNKQyxHQUFHLEVBQUVELE9BQU8sQ0FBQ0MsR0FBRztNQUNoQkMsR0FBRyxFQUFFTixLQUFLLENBQUNPLFNBQVMsQ0FBQyxLQUFLLENBQUM7TUFDM0JDLE1BQU0sRUFBRUosT0FBTyxDQUFDSSxNQUFNO01BQ3RCQyxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0s7SUFDaEIsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsV0FBVyxDQUFDQyxRQUFRLEVBQUU7SUFDcEIsSUFBSSxDQUFDQyxRQUFRLENBQUNELFFBQVEsQ0FBQztJQUN2QixJQUFJLENBQUNGLElBQUksQ0FBQ0ksTUFBTSxDQUFDRixRQUFRLENBQUM7RUFDNUI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYW5ldGFyeWRldmFzdGF0aW9uLy4vc3JjL3NjcmlwdHMvYXN0ZXJvaWQuanM/YTczYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZ19vYmplY3RcIjtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzdGVyb2lkIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIHBvczogb3B0aW9ucy5wb3MsXG4gICAgICB2ZWw6IFV0aWxzLnJhbmRvbVZlYygwLjAyNSksXG4gICAgICByYWRpdXM6IG9wdGlvbnMucmFkaXVzLFxuICAgICAgZ2FtZTogb3B0aW9ucy5nYW1lLFxuICAgIH0pO1xuICB9XG5cbiAgY29sbGlkZVdpdGgob3RoZXJPYmopIHtcbiAgICB0aGlzLmNvbnN1bWVzKG90aGVyT2JqKTtcbiAgICB0aGlzLmdhbWUucmVtb3ZlKG90aGVyT2JqKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWxzIiwicmVxdWlyZSIsIkFzdGVyb2lkIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFuZG9tVmVjIiwicmFkaXVzIiwiZ2FtZSIsImNvbGxpZGVXaXRoIiwib3RoZXJPYmoiLCJjb25zdW1lcyIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/asteroid.js\n");

/***/ }),

/***/ "./src/scripts/blackhole.js":
/*!**********************************!*\
  !*** ./src/scripts/blackhole.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlackHole; }\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\nclass BlackHole extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    super({\n      pos: options.pos,\n      vel: [0, 0],\n      radius: 20,\n      game: options.game\n    });\n  }\n  collideWith(otherObj) {\n    this.consumes(otherObj);\n    this.game.remove(otherObj);\n  }\n  update(mousePos) {\n    let vel = [...mousePos];\n    if (mousePos[0] !== this.pos[0] && mousePos[1] !== this.pos[1]) {\n      vel[0] -= this.pos[0] + 25;\n      vel[1] -= this.pos[1] + 83;\n      vel = Utils.setMag(vel, 0.5);\n      if (this.pos[0] + vel[0] >= 0 && this.pos[1] + vel[1] >= 0) {\n        this.pos[0] += vel[0];\n        this.pos[1] += vel[1];\n      }\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ibGFja2hvbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFDM0MsTUFBTUMsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLHVDQUFTLENBQUM7QUFFakIsTUFBTUMsU0FBUyxTQUFTSCxzREFBWSxDQUFDO0VBQ2xESSxXQUFXLENBQUNDLE9BQU8sRUFBRTtJQUNuQixLQUFLLENBQUM7TUFDSkMsR0FBRyxFQUFFRCxPQUFPLENBQUNDLEdBQUc7TUFDaEJDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7TUFDWEMsTUFBTSxFQUFFLEVBQUU7TUFDVkMsSUFBSSxFQUFFSixPQUFPLENBQUNJO0lBQ2hCLENBQUMsQ0FBQztFQUNKO0VBRUFDLFdBQVcsQ0FBQ0MsUUFBUSxFQUFFO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxRQUFRLENBQUM7SUFDdkIsSUFBSSxDQUFDRixJQUFJLENBQUNJLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDO0VBQzVCO0VBRUFHLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFO0lBQ2YsSUFBSVIsR0FBRyxHQUFHLENBQUMsR0FBR1EsUUFBUSxDQUFDO0lBQ3ZCLElBQUlBLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUNULEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSVMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQ1QsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQzlEQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtNQUMxQkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0QsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7TUFDMUJDLEdBQUcsR0FBR04sS0FBSyxDQUFDZSxNQUFNLENBQUNULEdBQUcsRUFBRSxHQUFHLENBQUM7TUFDNUIsSUFBSSxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxRCxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSUMsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUN2QjtJQUNGO0VBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYW5ldGFyeWRldmFzdGF0aW9uLy4vc3JjL3NjcmlwdHMvYmxhY2tob2xlLmpzPzZhNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbGFja0hvbGUgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgcG9zOiBvcHRpb25zLnBvcyxcbiAgICAgIHZlbDogWzAsIDBdLFxuICAgICAgcmFkaXVzOiAyMCxcbiAgICAgIGdhbWU6IG9wdGlvbnMuZ2FtZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbGxpZGVXaXRoKG90aGVyT2JqKSB7XG4gICAgdGhpcy5jb25zdW1lcyhvdGhlck9iaik7XG4gICAgdGhpcy5nYW1lLnJlbW92ZShvdGhlck9iaik7XG4gIH1cblxuICB1cGRhdGUobW91c2VQb3MpIHtcbiAgICBsZXQgdmVsID0gWy4uLm1vdXNlUG9zXTtcbiAgICBpZiAobW91c2VQb3NbMF0gIT09IHRoaXMucG9zWzBdICYmIG1vdXNlUG9zWzFdICE9PSB0aGlzLnBvc1sxXSkge1xuICAgICAgdmVsWzBdIC09IHRoaXMucG9zWzBdICsgMjU7XG4gICAgICB2ZWxbMV0gLT0gdGhpcy5wb3NbMV0gKyA4MztcbiAgICAgIHZlbCA9IFV0aWxzLnNldE1hZyh2ZWwsIDAuNSk7XG4gICAgICBpZiAodGhpcy5wb3NbMF0gKyB2ZWxbMF0gPj0gMCAmJiB0aGlzLnBvc1sxXSArIHZlbFsxXSA+PSAwKSB7XG4gICAgICAgIHRoaXMucG9zWzBdICs9IHZlbFswXTtcbiAgICAgICAgdGhpcy5wb3NbMV0gKz0gdmVsWzFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWxzIiwicmVxdWlyZSIsIkJsYWNrSG9sZSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsInZlbCIsInJhZGl1cyIsImdhbWUiLCJjb2xsaWRlV2l0aCIsIm90aGVyT2JqIiwiY29uc3VtZXMiLCJyZW1vdmUiLCJ1cGRhdGUiLCJtb3VzZVBvcyIsInNldE1hZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/blackhole.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/scripts/asteroid.js\");\n/* harmony import */ var _blackhole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blackhole */ \"./src/scripts/blackhole.js\");\n\n\nclass Game {\n  constructor(canvas) {\n    this.DIM_X = canvas.width;\n    this.DIM_Y = canvas.height;\n    this.NUM_OBJECTS = 20;\n    this.objects = [];\n    this.addObjects();\n    this.running = true;\n  }\n  addObjects() {\n    while (this.objects.length < this.NUM_OBJECTS) {\n      const asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        pos: this.randomPosition(),\n        // Math.random() * (max - min) + min\n        radius: Math.floor(Math.random() * (30 - 15) + 15),\n        game: this\n      });\n      this.objects.push(asteroid);\n    }\n    const blackhole = new _blackhole__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      pos: [this.DIM_X / 2, this.DIM_Y / 2],\n      game: this\n    });\n    this.objects.push(blackhole);\n  }\n  randomPosition() {\n    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];\n  }\n  draw(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n    // const blackhole = this.objects[this.objects.length - 1];\n    // ctx.scale(20 / blackhole.radius, 20 / blackhole.radius);\n    this.objects.forEach(object => {\n      object.draw(ctx);\n    });\n  }\n  moveObjects() {\n    this.objects.forEach(object => {\n      if (!(object instanceof _blackhole__WEBPACK_IMPORTED_MODULE_1__[\"default\"])) {\n        object.move();\n        object.pos = this.wrap(object.pos);\n      }\n    });\n  }\n  checkCollisions() {\n    for (let i = 1; i < this.objects.length; i++) {\n      for (let j = 0; j < i; j++) {\n        if (this.objects[i].isCollidedWith(this.objects[j])) {\n          if (this.objects[i].radius >= this.objects[j].radius) {\n            this.objects[i].collideWith(this.objects[j]);\n          } else {\n            if (this.objects[i] instanceof _blackhole__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n              this.running = false;\n            }\n            this.objects[j].collideWith(this.objects[i]);\n          }\n          break;\n        }\n      }\n    }\n  }\n  remove(obj) {\n    this.objects.splice(this.objects.indexOf(obj), 1);\n    if (this.objects.length < 5) {\n      let x = 3;\n      const blackhole = this.objects[this.objects.length - 1];\n      while (x--) {\n        const asteroid = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          pos: this.randomPosition(),\n          radius: Math.floor(Math.random() * (30 - 15) + 15),\n          game: this\n        });\n        if (!asteroid.isCollidedWith(blackhole)) {\n          this.objects.unshift(asteroid);\n        }\n      }\n    }\n  }\n  step() {\n    this.checkCollisions();\n    this.moveObjects();\n  }\n  start(ctx, mousePos) {\n    const blackhole = this.objects[this.objects.length - 1];\n    this.step();\n    if (blackhole instanceof _blackhole__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      blackhole.update(mousePos);\n    }\n    this.draw(ctx);\n    if (this.running) {\n      requestAnimationFrame(this.start.bind(this, ctx, mousePos));\n    } else {\n      ctx.font = \"48px andale mono\";\n      ctx.fillStyle = \"#FF0000\";\n      ctx.fillText(\"GAME OVER\", this.DIM_X / 2 - 130, this.DIM_Y / 2);\n    }\n  }\n  wrap(pos) {\n    let res = [pos[0], pos[1]];\n    if (pos[0] < 0) {\n      res[0] = this.DIM_X;\n    } else if (pos[0] > this.DIM_X) {\n      res[0] = 0;\n    }\n    if (pos[1] < 0) {\n      res[1] = this.DIM_Y;\n    } else if (pos[1] > this.DIM_Y) {\n      res[1] = 0;\n    }\n    return res;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNoQixHQUFHLEVBQUU7SUFDUixJQUFJcUMsR0FBRyxHQUFHLENBQUNyQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFJQSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2RxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDL0MsS0FBSztJQUNyQixDQUFDLE1BQU0sSUFBSVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1YsS0FBSyxFQUFFO01BQzlCK0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDWjtJQUNBLElBQUlyQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO01BQ2RxQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDN0MsS0FBSztJQUNyQixDQUFDLE1BQU0sSUFBSVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ1IsS0FBSyxFQUFFO01BQzlCNkMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDWjtJQUNBLE9BQU9BLEdBQUc7RUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0YXJ5ZGV2YXN0YXRpb24vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzdGVyb2lkIGZyb20gXCIuL2FzdGVyb2lkXCI7XG5pbXBvcnQgQmxhY2tIb2xlIGZyb20gXCIuL2JsYWNraG9sZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgdGhpcy5ESU1fWCA9IGNhbnZhcy53aWR0aDtcbiAgICB0aGlzLkRJTV9ZID0gY2FudmFzLmhlaWdodDtcbiAgICB0aGlzLk5VTV9PQkpFQ1RTID0gMjA7XG4gICAgdGhpcy5vYmplY3RzID0gW107XG4gICAgdGhpcy5hZGRPYmplY3RzKCk7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZE9iamVjdHMoKSB7XG4gICAgd2hpbGUgKHRoaXMub2JqZWN0cy5sZW5ndGggPCB0aGlzLk5VTV9PQkpFQ1RTKSB7XG4gICAgICBjb25zdCBhc3Rlcm9pZCA9IG5ldyBBc3Rlcm9pZCh7XG4gICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLFxuICAgICAgICAvLyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbiAgICAgICAgcmFkaXVzOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMzAgLSAxNSkgKyAxNSksXG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICB9KTtcbiAgICAgIHRoaXMub2JqZWN0cy5wdXNoKGFzdGVyb2lkKTtcbiAgICB9XG4gICAgY29uc3QgYmxhY2tob2xlID0gbmV3IEJsYWNrSG9sZSh7XG4gICAgICBwb3M6IFt0aGlzLkRJTV9YIC8gMiwgdGhpcy5ESU1fWSAvIDJdLFxuICAgICAgZ2FtZTogdGhpcyxcbiAgICB9KTtcbiAgICB0aGlzLm9iamVjdHMucHVzaChibGFja2hvbGUpO1xuICB9XG5cbiAgcmFuZG9tUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIFtNYXRoLnJhbmRvbSgpICogdGhpcy5ESU1fWCwgTWF0aC5yYW5kb20oKSAqIHRoaXMuRElNX1ldO1xuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgIC8vIGNvbnN0IGJsYWNraG9sZSA9IHRoaXMub2JqZWN0c1t0aGlzLm9iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgLy8gY3R4LnNjYWxlKDIwIC8gYmxhY2tob2xlLnJhZGl1cywgMjAgLyBibGFja2hvbGUucmFkaXVzKTtcbiAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICBvYmplY3QuZHJhdyhjdHgpO1xuICAgIH0pO1xuICB9XG5cbiAgbW92ZU9iamVjdHMoKSB7XG4gICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgaWYgKCEob2JqZWN0IGluc3RhbmNlb2YgQmxhY2tIb2xlKSkge1xuICAgICAgICBvYmplY3QubW92ZSgpO1xuICAgICAgICBvYmplY3QucG9zID0gdGhpcy53cmFwKG9iamVjdC5wb3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tDb2xsaXNpb25zKCkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5vYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGk7IGorKykge1xuICAgICAgICBpZiAodGhpcy5vYmplY3RzW2ldLmlzQ29sbGlkZWRXaXRoKHRoaXMub2JqZWN0c1tqXSkpIHtcbiAgICAgICAgICBpZiAodGhpcy5vYmplY3RzW2ldLnJhZGl1cyA+PSB0aGlzLm9iamVjdHNbal0ucmFkaXVzKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaV0uY29sbGlkZVdpdGgodGhpcy5vYmplY3RzW2pdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMub2JqZWN0c1tpXSBpbnN0YW5jZW9mIEJsYWNrSG9sZSkge1xuICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tqXS5jb2xsaWRlV2l0aCh0aGlzLm9iamVjdHNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShvYmopIHtcbiAgICB0aGlzLm9iamVjdHMuc3BsaWNlKHRoaXMub2JqZWN0cy5pbmRleE9mKG9iaiksIDEpO1xuICAgIGlmICh0aGlzLm9iamVjdHMubGVuZ3RoIDwgNSkge1xuICAgICAgbGV0IHggPSAzO1xuICAgICAgY29uc3QgYmxhY2tob2xlID0gdGhpcy5vYmplY3RzW3RoaXMub2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICAgIHdoaWxlICh4LS0pIHtcbiAgICAgICAgY29uc3QgYXN0ZXJvaWQgPSBuZXcgQXN0ZXJvaWQoe1xuICAgICAgICAgIHBvczogdGhpcy5yYW5kb21Qb3NpdGlvbigpLFxuICAgICAgICAgIHJhZGl1czogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDMwIC0gMTUpICsgMTUpLFxuICAgICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWFzdGVyb2lkLmlzQ29sbGlkZWRXaXRoKGJsYWNraG9sZSkpIHtcbiAgICAgICAgICB0aGlzLm9iamVjdHMudW5zaGlmdChhc3Rlcm9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGVwKCkge1xuICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgdGhpcy5tb3ZlT2JqZWN0cygpO1xuICB9XG5cbiAgc3RhcnQoY3R4LCBtb3VzZVBvcykge1xuICAgIGNvbnN0IGJsYWNraG9sZSA9IHRoaXMub2JqZWN0c1t0aGlzLm9iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgdGhpcy5zdGVwKCk7XG4gICAgaWYgKGJsYWNraG9sZSBpbnN0YW5jZW9mIEJsYWNrSG9sZSkge1xuICAgICAgYmxhY2tob2xlLnVwZGF0ZShtb3VzZVBvcyk7XG4gICAgfVxuICAgIHRoaXMuZHJhdyhjdHgpO1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0LmJpbmQodGhpcywgY3R4LCBtb3VzZVBvcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdHguZm9udCA9IFwiNDhweCBhbmRhbGUgbW9ub1wiO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI0ZGMDAwMFwiO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIHRoaXMuRElNX1ggLyAyIC0gMTMwLCB0aGlzLkRJTV9ZIC8gMik7XG4gICAgfVxuICB9XG5cbiAgd3JhcChwb3MpIHtcbiAgICBsZXQgcmVzID0gW3Bvc1swXSwgcG9zWzFdXTtcbiAgICBpZiAocG9zWzBdIDwgMCkge1xuICAgICAgcmVzWzBdID0gdGhpcy5ESU1fWDtcbiAgICB9IGVsc2UgaWYgKHBvc1swXSA+IHRoaXMuRElNX1gpIHtcbiAgICAgIHJlc1swXSA9IDA7XG4gICAgfVxuICAgIGlmIChwb3NbMV0gPCAwKSB7XG4gICAgICByZXNbMV0gPSB0aGlzLkRJTV9ZO1xuICAgIH0gZWxzZSBpZiAocG9zWzFdID4gdGhpcy5ESU1fWSkge1xuICAgICAgcmVzWzFdID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFzdGVyb2lkIiwiQmxhY2tIb2xlIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiRElNX1giLCJ3aWR0aCIsIkRJTV9ZIiwiaGVpZ2h0IiwiTlVNX09CSkVDVFMiLCJvYmplY3RzIiwiYWRkT2JqZWN0cyIsInJ1bm5pbmciLCJsZW5ndGgiLCJhc3Rlcm9pZCIsInBvcyIsInJhbmRvbVBvc2l0aW9uIiwicmFkaXVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2FtZSIsInB1c2giLCJibGFja2hvbGUiLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsIm9iamVjdCIsIm1vdmVPYmplY3RzIiwibW92ZSIsIndyYXAiLCJjaGVja0NvbGxpc2lvbnMiLCJpIiwiaiIsImlzQ29sbGlkZWRXaXRoIiwiY29sbGlkZVdpdGgiLCJyZW1vdmUiLCJvYmoiLCJzcGxpY2UiLCJpbmRleE9mIiwieCIsInVuc2hpZnQiLCJzdGVwIiwic3RhcnQiLCJtb3VzZVBvcyIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MovingObject; }\n/* harmony export */ });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/scripts/asteroid.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\nconst blackholeImg = new Image();\nblackholeImg.src = \"./assets/blackhole.png\";\nconst planets = [];\nfor (let i = 0; i <= 7; i++) {\n  planets.push(new Image());\n  planets[i].src = `./assets/planet${i}.png`;\n}\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.game = options.game;\n  }\n  draw(ctx) {\n    if (this instanceof _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      // let idx = Math.floor(Math.random() * 8);\n      // ctx.drawImage(planets[idx], this.pos[0], this.pos[1]);\n      ctx.fillStyle = \"white\";\n    } else {\n      // ctx.drawImage(blackholeImg, this.pos[0], this.pos[1]);\n      ctx.fillStyle = \"red\";\n    }\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fill();\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  isCollidedWith(otherObj) {\n    return Utils.distance(this.pos, otherObj.pos) < this.radius + otherObj.radius;\n  }\n  consumes(otherObj) {\n    const sumOfAreas = Math.PI * this.radius ** 2 + Math.PI * otherObj.radius ** 2;\n    this.radius = Math.sqrt(sumOfAreas / Math.PI);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQ2xDLE1BQU1DLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyx1Q0FBUyxDQUFDO0FBQ2hDLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxLQUFLLEVBQUU7QUFDaENELFlBQVksQ0FBQ0UsR0FBRyxHQUFHLHdCQUF3QjtBQUMzQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUNsQixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFFO0VBQzNCRCxPQUFPLENBQUNFLElBQUksQ0FBQyxJQUFJSixLQUFLLEVBQUUsQ0FBQztFQUN6QkUsT0FBTyxDQUFDQyxDQUFDLENBQUMsQ0FBQ0YsR0FBRyxHQUFJLGtCQUFpQkUsQ0FBRSxNQUFLO0FBQzVDO0FBRWUsTUFBTUUsWUFBWSxDQUFDO0VBQ2hDQyxXQUFXLENBQUNDLE9BQU8sRUFBRTtJQUNuQixJQUFJLENBQUNDLEdBQUcsR0FBR0QsT0FBTyxDQUFDQyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixPQUFPLENBQUNFLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdILE9BQU8sQ0FBQ0csTUFBTTtJQUM1QixJQUFJLENBQUNDLElBQUksR0FBR0osT0FBTyxDQUFDSSxJQUFJO0VBQzFCO0VBRUFDLElBQUksQ0FBQ0MsR0FBRyxFQUFFO0lBQ1IsSUFBSSxJQUFJLFlBQVlqQixpREFBUSxFQUFFO01BQzVCO01BQ0E7TUFDQWlCLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87SUFDekIsQ0FBQyxNQUFNO01BQ0w7TUFDQUQsR0FBRyxDQUFDQyxTQUFTLEdBQUcsS0FBSztJQUN2QjtJQUNBRCxHQUFHLENBQUNFLFNBQVMsRUFBRTtJQUNmRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTyxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUM5REwsR0FBRyxDQUFDTSxJQUFJLEVBQUU7RUFDWjtFQUVBQyxJQUFJLEdBQUc7SUFDTCxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzVCO0VBRUFZLGNBQWMsQ0FBQ0MsUUFBUSxFQUFFO0lBQ3ZCLE9BQ0V6QixLQUFLLENBQUMwQixRQUFRLENBQUMsSUFBSSxDQUFDZixHQUFHLEVBQUVjLFFBQVEsQ0FBQ2QsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDRSxNQUFNLEdBQUdZLFFBQVEsQ0FBQ1osTUFBTTtFQUUxRTtFQUVBYyxRQUFRLENBQUNGLFFBQVEsRUFBRTtJQUNqQixNQUFNRyxVQUFVLEdBQ2RSLElBQUksQ0FBQ0MsRUFBRSxHQUFHLElBQUksQ0FBQ1IsTUFBTSxJQUFJLENBQUMsR0FBR08sSUFBSSxDQUFDQyxFQUFFLEdBQUdJLFFBQVEsQ0FBQ1osTUFBTSxJQUFJLENBQUM7SUFDN0QsSUFBSSxDQUFDQSxNQUFNLEdBQUdPLElBQUksQ0FBQ1MsSUFBSSxDQUFDRCxVQUFVLEdBQUdSLElBQUksQ0FBQ0MsRUFBRSxDQUFDO0VBQy9DO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuZXRhcnlkZXZhc3RhdGlvbi8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXN0ZXJvaWQgZnJvbSBcIi4vYXN0ZXJvaWRcIjtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5jb25zdCBibGFja2hvbGVJbWcgPSBuZXcgSW1hZ2UoKTtcbmJsYWNraG9sZUltZy5zcmMgPSBcIi4vYXNzZXRzL2JsYWNraG9sZS5wbmdcIjtcbmNvbnN0IHBsYW5ldHMgPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDw9IDc7IGkrKykge1xuICBwbGFuZXRzLnB1c2gobmV3IEltYWdlKCkpO1xuICBwbGFuZXRzW2ldLnNyYyA9IGAuL2Fzc2V0cy9wbGFuZXQke2l9LnBuZ2A7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgICB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQXN0ZXJvaWQpIHtcbiAgICAgIC8vIGxldCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA4KTtcbiAgICAgIC8vIGN0eC5kcmF3SW1hZ2UocGxhbmV0c1tpZHhdLCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY3R4LmRyYXdJbWFnZShibGFja2hvbGVJbWcsIHRoaXMucG9zWzBdLCB0aGlzLnBvc1sxXSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBtb3ZlKCkge1xuICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICB9XG5cbiAgaXNDb2xsaWRlZFdpdGgob3RoZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgVXRpbHMuZGlzdGFuY2UodGhpcy5wb3MsIG90aGVyT2JqLnBvcykgPCB0aGlzLnJhZGl1cyArIG90aGVyT2JqLnJhZGl1c1xuICAgICk7XG4gIH1cblxuICBjb25zdW1lcyhvdGhlck9iaikge1xuICAgIGNvbnN0IHN1bU9mQXJlYXMgPVxuICAgICAgTWF0aC5QSSAqIHRoaXMucmFkaXVzICoqIDIgKyBNYXRoLlBJICogb3RoZXJPYmoucmFkaXVzICoqIDI7XG4gICAgdGhpcy5yYWRpdXMgPSBNYXRoLnNxcnQoc3VtT2ZBcmVhcyAvIE1hdGguUEkpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQXN0ZXJvaWQiLCJVdGlscyIsInJlcXVpcmUiLCJibGFja2hvbGVJbWciLCJJbWFnZSIsInNyYyIsInBsYW5ldHMiLCJpIiwicHVzaCIsIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsInZlbCIsInJhZGl1cyIsImdhbWUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJpc0NvbGxpZGVkV2l0aCIsIm90aGVyT2JqIiwiZGlzdGFuY2UiLCJjb25zdW1lcyIsInN1bU9mQXJlYXMiLCJzcXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(module) {

eval("const Utils = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return [Math.sin(deg) * length, Math.cos(deg) * length];\n  },\n  distance(pos1, pos2) {\n    return Math.sqrt((pos1[0] - pos2[0]) ** 2 + (pos1[1] - pos2[1]) ** 2);\n  },\n  setMag(vec, newMag) {\n    let currentMag = this.distance(vec, [0, 0]);\n    return [vec[0] * (newMag / currentMag), vec[1] * (newMag / currentMag)];\n  }\n};\nmodule.exports = Utils;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm5hbWVzIjpbIlV0aWxzIiwicmFuZG9tVmVjIiwibGVuZ3RoIiwiZGVnIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwic2luIiwiY29zIiwiZGlzdGFuY2UiLCJwb3MxIiwicG9zMiIsInNxcnQiLCJzZXRNYWciLCJ2ZWMiLCJuZXdNYWciLCJjdXJyZW50TWFnIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbmV0YXJ5ZGV2YXN0YXRpb24vLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWxzID0ge1xuICByYW5kb21WZWMobGVuZ3RoKSB7XG4gICAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgIHJldHVybiBbTWF0aC5zaW4oZGVnKSAqIGxlbmd0aCwgTWF0aC5jb3MoZGVnKSAqIGxlbmd0aF07XG4gIH0sXG4gIGRpc3RhbmNlKHBvczEsIHBvczIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KChwb3MxWzBdIC0gcG9zMlswXSkgKiogMiArIChwb3MxWzFdIC0gcG9zMlsxXSkgKiogMik7XG4gIH0sXG4gIHNldE1hZyh2ZWMsIG5ld01hZykge1xuICAgIGxldCBjdXJyZW50TWFnID0gdGhpcy5kaXN0YW5jZSh2ZWMsIFswLCAwXSk7XG4gICAgcmV0dXJuIFt2ZWNbMF0gKiAobmV3TWFnIC8gY3VycmVudE1hZyksIHZlY1sxXSAqIChuZXdNYWcgLyBjdXJyZW50TWFnKV07XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxLQUFLLEdBQUc7RUFDWkMsU0FBUyxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsTUFBTUMsR0FBRyxHQUFHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxFQUFFLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDRyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxHQUFHRCxNQUFNLEVBQUVFLElBQUksQ0FBQ0ksR0FBRyxDQUFDTCxHQUFHLENBQUMsR0FBR0QsTUFBTSxDQUFDO0VBQ3pELENBQUM7RUFDRE8sUUFBUSxDQUFDQyxJQUFJLEVBQUVDLElBQUksRUFBRTtJQUNuQixPQUFPUCxJQUFJLENBQUNRLElBQUksQ0FBQyxDQUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3ZFLENBQUM7RUFDREUsTUFBTSxDQUFDQyxHQUFHLEVBQUVDLE1BQU0sRUFBRTtJQUNsQixJQUFJQyxVQUFVLEdBQUcsSUFBSSxDQUFDUCxRQUFRLENBQUNLLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSUMsTUFBTSxHQUFHQyxVQUFVLENBQUMsRUFBRUYsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJQyxNQUFNLEdBQUdDLFVBQVUsQ0FBQyxDQUFDO0VBQ3pFO0FBQ0YsQ0FBQztBQUVEQyxNQUFNLENBQUNDLE9BQU8sR0FBR2xCLEtBQUsifQ==\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

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
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";
import _asyncToGenerator from "@babel/runtime-corejs3/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import * as React from 'react';
import fetch from 'unfetch';

var Components = function Components() {
  var _context2;

  var _React$useState = React.useState(undefined),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      response = _React$useState2[0],
      updateResponse = _React$useState2[1];

  React.useEffect(function () {
    _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var res, json;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://next.json-generator.com/api/json/get/4JjRSZ7Qd', {
                mode: 'cors'
              });

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              json = _context.sent;
              updateResponse(json);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return React.createElement(React.Fragment, null, response ? React.createElement(React.Fragment, null, React.createElement("p", null, "\u975E\u540C\u671F\u901A\u4FE1\u7D50\u679C"), React.createElement("ul", null, response && _mapInstanceProperty(_context2 = response.list).call(_context2, function (data) {
    return React.createElement("li", {
      key: data.id
    }, data.id, ": ", data.name);
  })), React.createElement("p", null, "\u753B\u50CF\u30C6\u30B9\u30C8: ", React.createElement("img", {
    src: "https://placehold.jp/16x16.png"
  }))) : React.createElement("p", null, "loading..."));
};

export { Components };
import _slicedToArray from "@babel/runtime-corejs3/helpers/slicedToArray";
import * as React from 'react';
import Modal from 'react-modal';

var Components = function Components() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      modalIsOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return React.createElement(React.Fragment, null, React.createElement("p", null, "\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C81"), React.createElement("button", {
    onClick: openModal
  }, "open modal"), React.createElement(Modal, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal
  }, React.createElement("p", null, "\u30E2\u30FC\u30C0\u30EB\u3060\u3088\u30FC\u30FC\u30FC"), React.createElement("p", {
    onClick: closeModal,
    style: {
      cursor: 'pointer'
    }
  }, "\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u3089\u30E2\u30FC\u30C0\u30EB\u304C\u6D88\u3048\u308B\u3088")));
};

export { Components };
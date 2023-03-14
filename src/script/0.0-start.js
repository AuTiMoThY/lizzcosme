/*// 最新消息清單
class newsBlock extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Element functionality written in here
  }
}
customElements.define('module-news-block', newsBlock);*/


const lizzUI = (function (window, jQuery) {
  if (!window.jQuery) { throw new Error("requires jQuery") }

  let $ = window.jQuery;

  let breakpoints = {
    "xxs": 0,
    "xs": 375,
    "sm": 576,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1366,
    "uxl": 1680
  };

  let mqUp = {
    "xxs": window.matchMedia("(min-width: " + breakpoints.xxs + "px)"),
    "xs": window.matchMedia("(min-width: " + breakpoints.xs + "px)"),
    "sm": window.matchMedia("(min-width: " + breakpoints.sm + "px)"),
    "md": window.matchMedia("(min-width: " + breakpoints.md + "px)"),
    "lg": window.matchMedia("(min-width: " + breakpoints.lg + "px)"),
    "xl": window.matchMedia("(min-width: " + breakpoints.xl + "px)"),
    "xxl": window.matchMedia("(min-width: " + breakpoints.xxl + "px)"),
    "uxl": window.matchMedia("(min-width: " + breakpoints.uxl + "px)"),
  };


  let mqDown = {
    "xxs": window.matchMedia("(max-width: " + breakpoints.xs + "px)"),
    "xs": window.matchMedia("(max-width: " + breakpoints.sm + "px)"),
    "sm": window.matchMedia("(max-width: " + breakpoints.md + "px)"),
    "md": window.matchMedia("(max-width: " + breakpoints.lg + "px)"),
    "lg": window.matchMedia("(max-width: " + breakpoints.xl + "px)"),
    "xl": window.matchMedia("(max-width: " + breakpoints.xxl + "px)"),
    "xxl": window.matchMedia("(max-width: " + breakpoints.uxl + "px)"),
    // "uxl" : window.matchMedia("(max-width: "+breakpoints.+"px)"),
  };

  return {

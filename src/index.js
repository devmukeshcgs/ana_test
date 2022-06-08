import '@/styles/index.scss'
import './js/lead.js';

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

import 'bootstrap';
import logoImg from './images/logo.png';
var homeImg = document.getElementById('logo');
var footerImg = document.getElementById('footer-logo-strip');
homeImg.src = logoImg;
footerImg.src = logoImg;
// import html from "./home.html";

(function() {})();
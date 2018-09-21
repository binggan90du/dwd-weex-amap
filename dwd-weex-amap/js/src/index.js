

const DwdWeexAmap = {
  show() {
      alert("module DwdWeexAmap is created sucessfully ")
  }
};


var meta = {
   DwdWeexAmap: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('DwdWeexAmap', DwdWeexAmap);
}

function init(weex) {
  weex.registerApiModule('DwdWeexAmap', DwdWeexAmap, meta);
}
module.exports = {
  init:init
};

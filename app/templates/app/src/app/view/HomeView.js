define(function (require, exports, module) {
  var BasicView = require('app/view/View');
  var BasicModel = require('app/model/Model');


  function HomeView() {
    this.models = {
      Basic: BasicModel
    }
    this.viewCls = 'view-home';
    this._BasicView = BasicView;

    var VIEW = this,
      isApp = Core.NativeBridge.isApp(),
      Tpl, els,
      tap = VIEW._BasicView.tapEvent;

    //注册model观察者

    function initEls() {
      if(els){return;}
      var main = VIEW._BasicView.getView(VIEW.viewCls);
      els = {
        main: main

      }
      bindEvent();
    }//end initEls
    function initTpls(){
      if(Tpl){return;}
      Tpl = Tpl || VIEW._BasicView.getTemplates(VIEW.viewCls);
    }
    function initResources() {
      initEls();
      initTpls();
    }
    this.getEls = function () {
      initEls();
      return els;
    }
    this.getTpls = function(){
      initTpls();
      return Tpl;
    }
    function bindEvent() {

    }//end bindEvent

    this.show = function () {
      initResources();

      if (!els.main.hasClass('show')) {
        VIEW._BasicView.show(VIEW.viewCls);

        Core.Event.trigger('trigerAnimate', els.main);
      }
    }
    this.hide = function () {
      if (!els) {
        return;
      }
    }
    function render(data) {
      initResources();
    }//end render


  }//end View
  return new HomeView();
});

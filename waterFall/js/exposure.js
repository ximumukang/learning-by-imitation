/**
 * Created by 杭 on 2017/7/7.
 */
var Exposure = {

    init: function($target, handler) {

        this.$c = $(window);
        this.$target = $target;
        this.handler = handler;

        this.bind();
        this.checkShow();
    },

    bind: function() {

        var me = this,
            timer = null,
            interval = 100;

        $(window).on('scroll', function(e) {
            timer && clearTimeout(timer);
            timer = setTimeout(function() {
                me.checkShow();
            }, interval);
        });

    },

    checkShow: function() {
        if(this.isShow(this.$target)){
            this.handler && this.handler();
        }
    },

    isShow:function($el) {

        var scrollH = this.$c.scrollTop(),
            winH = this.$c.height(),
            top = $el.offset().top;

        if (top < winH + scrollH) {
            return true;
        } else {
            return false;
        }
    }
};

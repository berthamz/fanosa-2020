/*
Sergio Mireles
mireles001@gmail.com
20130222

Carousel Maker is a simple and hopefuly handy for someone 
wishing to create a web carousel component on his/her website.

EDIT: 20140209
Using fade transition won't fadeout the old slide item, 
it will now wait until the new slide finish fadein and 
the it will be removed. Substitute fadeOut for setTimeout.

EDIT: 20150608
Adding next and prev buttons support. Changed markup dom, 
no more ids, I'm only using class labels now.

EDIT: 20150927
When resizing the screen, we will check if our holder 
div changed, and apply the new dimensions to slides and 
viewer div. Current and Old slides wont be affected, but 
new slides to come will have the new size values.

EDIT: 20160510
Adding destroy method, to remove styles, event listeners 
and erase all data regarding the specified carousel.

EDIT: 20160928
Deprecated size() from jQuery1.9 was substituted for length now.
Carousel won't crash with current jQuery 3.1.1
Destroy function now removes style attributes from internal
dom structures inside desired carousel.

If something is not working, please let me know! Thanks!
*/
var carousel = {
    tweenSpeed      : 1000,
    tweenHold       : 3000,
    tweenType       : 'slide',
    labels          : {
        items       : 'js-carousel-items',
        viewer      : 'js-carousel-viewer',
        buttons     : 'js-carousel-btns',
        button      : 'js-carousel-btn',
        prev        : 'js-carousel-prev',
        next        : 'js-carousel-next',
        buttonLayer : 'js-button-layer'
    },
    dom             : [],

    init : function (_params){
        if(_params.target !== undefined && this.dom[_params.target] === undefined){
            var targetName = '_' + _params.target;
            this.dom[targetName] = {};

            var holder      = $('#' + _params.target),
                items       = $('.' + this.labels.items, holder),
                viewer      = $('.' + this.labels.viewer, holder),
                button      = $('.' + this.labels.button, holder).hide(),
                prev        = $('.' + this.labels.prev, holder),
                next        = $('.' + this.labels.next, holder),
                doms        = [],
                buttons     = [],
                index       = 0,
                w           = parseInt(holder.css('width')),
                h           = parseInt(holder.css('height')),
                buttonLayer = undefined,
                i;

            items.hide();
            viewer.css('overflow', 'hidden').css('width', w + 'px').css('height', h + 'px').css('position', 'relative').css('z-index', '0');

            for(i = 0; i < items.children().length; i++){
                doms.push(items.children().eq(i));
            }

            var first = doms[index].clone().css('width',w+'px').css('height',h+'px').css('position','absolute').hide();
            viewer.append(first);
            
            // Adds button layer holder...
            if (button.length > 0 || prev.length > 0 || next.length > 0) {
                buttonLayer  = $('<div>').addClass(this.labels.buttonLayer).css('position', 'absolute').css('z-index', '1');
                holder.prepend(buttonLayer);
            }

            // Add nav buttons
            if(button.length > 0){
                var buttonHolder = $('<div class="' + this.labels.buttons + '"></div>').css('position', 'relative'),
                    newButton;

                for(i = 0; i < doms.length; i++){
                    newButton = button.clone().show().attr('id', targetName).attr('index', i).attr('data-index', i + 1).click(function(){
                        var $this = $(this);
                        carousel.goTo({target: $this.attr('id'), index:parseInt($this.attr('index')), auto:false});
                    });
                    buttonHolder.append(newButton);
                    buttons.push(newButton);
                }
                buttonLayer.append(buttonHolder);
                this.dom[targetName].buttons = buttons;
            }

            // Listeners for prev and next button
            if (prev.length > 0) {
                prev.hide();
                prev = prev.clone().show();
                buttonLayer.append(prev);
                prev.click(function() {
                    carousel.customJump({target:'_'+$(this).parent().parent().attr('id'), jump: -1});
                });
            }

            if (next.length > 0) {
                next.hide();
                next = next.clone().show();
                buttonLayer.append(next);
                next.click(function() {
                    carousel.customJump({target:'_'+$(this).parent().parent().attr('id'), jump: 1});
                });
            }

            if(_params.autoscroll !== undefined && !_params.autoscroll) {
                this.dom[targetName].autoscroll = false;
            }else{
                this.dom[targetName].autoscroll = true;
            }
            if(_params.tween !== undefined){
                this.dom[targetName].tween = _params.tween;
            }else{
                this.dom[targetName].tween = this.tweenSpeed;
            }
            if(_params.hold !== undefined){
                this.dom[targetName].hold = _params.hold;
            }else{
                this.dom[targetName].hold = this.tweenHold;
            }
            if(this.dom[targetName].hold <= this.dom[targetName].tween){
                this.dom[targetName].hold = this.dom[targetName].tween+1;
            }
            if(_params.type !== undefined && _params.type != this.tweenType){ 
                this.dom[targetName].type = 'fade'; 
            }else{ 
                this.dom[targetName].type = this.tweenType;
            }
            this.dom[targetName].viewer = viewer;
            this.dom[targetName].items  = doms;
            this.dom[targetName].index  = index;
            this.dom[targetName].w      = w;
            this.dom[targetName].h      = h;
            this.dom[targetName].locked = false;
            this.dom[targetName].holder = holder;

            // First fade in animation...
            first.fadeIn(500,function(){
                $(this).attr('id', 'old');
                var targetName = '_' + $(this).parent().parent().attr('id');
                if(carousel.dom[targetName].autoscroll){
                    carousel.dom[targetName].interval = setInterval(function(){
                        carousel.customJump({target:targetName});
                    },carousel.dom[targetName].hold);
                }
                carousel.turnOnOffButton(carousel.dom[targetName],true);
            });

            this.resizeCarousel(targetName);
        }
    },

    /*
    Called from generic buttons such prev and next, special
    calls like the autoscroll with intervals.
    Parameters:
    target:String = name of carousel id.
    jump:Number = Number of jumps from current index,
                  next is 1 while prev is -1.. and so on.
    */
    customJump : function (_params){
        var nextItem,
            intJump   = 1,
            leftRight = undefined,
            maxSize   = carousel.dom[_params.target].items.length,
            blnAuto   = true;

        if (_params.jump !== undefined) {
            intJump = parseInt(_params.jump);
            leftRight = parseInt(_params.jump);
            blnAuto = false;

            if (Math.abs(intJump) >= maxSize) {
                if (intJump < 0) {
                   intJump = -1; 
                } else {
                    intJump = 1;
                }
            }
        }

        nextItem = carousel.dom[_params.target].index + intJump;

        if (intJump > 0) {
            if(nextItem >= maxSize) { 
                var difference = nextItem - maxSize;
                nextItem = difference;
            }
        } else if (intJump < 0) {
            if(nextItem < 0) { 
                var difference = maxSize + nextItem;
                nextItem = difference;
            }
        }

        carousel.goTo({target: _params.target, index: nextItem, auto: blnAuto, jump: leftRight});
    },

    /*
    Main function that brings the desired index item, it will also apply 
    the corresponding animation.
    Parameters:
    auto:Boolean = is it in autoscroll, or not.
    index:Number = Item's index we want to see. Most important param.
    target:String = Carousel id name.
    jump:Number = Optional param, used to validate to which side the
                  animation is running (only for slide carousels)
    */
    goTo : function (_params) {
        var carouselObj = carousel.dom[_params.target],
            blnAnimate  = false;
        
        if(!_params.auto && carouselObj.index != _params.index && !carouselObj.locked){
            if(carouselObj.autoscroll){
                clearInterval(carouselObj.interval);
                carouselObj.interval = setInterval(function(){
                    carousel.customJump({target:_params.target});
                },carouselObj.hold);
            }
            blnAnimate = true;
        }else{
            if(_params.auto){
                blnAnimate = true;
            }
        }

        if(blnAnimate){
            var direction = 1;
            if(_params.index > carouselObj.index || _params.auto){
                direction = -1;
            }

            if (_params.jump !== undefined) {
                if (_params.jump > 0) {
                    direction = -1;
                } else if (_params.jump < 0) {
                    direction = 1;
                }
            }
            
            carouselObj.locked = true;

            this.turnOnOffButton(carouselObj,false);
            carouselObj.index = _params.index;
            this.turnOnOffButton(carouselObj,true);

            var domNew = carouselObj.items[_params.index].clone().attr('id','new')
                .css('position','absolute').css('left','0').css('top','0')
                .css('width',carouselObj.w+'px').css('height',carouselObj.h+'px').hide(),
                domOld = $('#old',carouselObj.viewer);
            carouselObj.viewer.append(domNew);

            // Slider animation
            if(carouselObj.type === 'slide'){
                domOld.animate({left: '+='+carouselObj.w*direction },carouselObj.tween, function(){
                    $(this).remove();
                });
                domNew.show().css('left',carouselObj.w*(-1*direction))
                .animate({left: '+='+carouselObj.w*direction },carouselObj.tween, 
                function(){
                    $(this).attr('id','old');
                    if (carousel.dom['_'+$(this).parent().parent().attr('id')] !== undefined) {
                        carousel.dom['_'+$(this).parent().parent().attr('id')].locked = false;
                    }
                });
            // Fader animation
            } else if (carouselObj.type === 'fade') {
                setTimeout(function(){ domOld.remove(); },carouselObj.tween);
                domNew.fadeIn(carouselObj.tween,function(){
                    $(this).attr('id','old');
                    if (carousel.dom['_'+$(this).parent().parent().attr('id')] !== undefined) {
                        carousel.dom['_'+$(this).parent().parent().attr('id')].locked = false;
                    }
                });
            }
        }
    },

    turnOnOffButton : function (_obj, _selectButton) {
        if(_obj.buttons !== undefined){
            if(_selectButton){
                if(!_obj.buttons[_obj.index].hasClass('selected')){
                    _obj.buttons[_obj.index].addClass('selected');
                }
            }else{
                if(_obj.buttons[_obj.index].hasClass('selected')){
                    _obj.buttons[_obj.index].removeClass('selected');
                }
            }
        }
    },

    /*
    Adds jquery listener resize(), verifying change on holder div.
    Triggers once and lock, it will release the lock after 1000ms in order
    to have low execution requests.
    _strTarget : String = ID name of carousel we want to resize.
    */
    resizeCarousel : function (_strTarget) {
        var objCarousel = this;
        $(window).resize(function(){
            var domViewer = objCarousel.dom[_strTarget].viewer;

            if (domViewer.attr('data-resize') === undefined ||
                domViewer.attr('data-resize') === 'false') {
                
                domViewer.attr('data-resize', 'true');

                setTimeout(function(){ 
                    var newWidth  = objCarousel.dom[_strTarget].holder.width(),
                        newHeight = objCarousel.dom[_strTarget].holder.height();
                    
                    objCarousel.dom[_strTarget].viewer.css('width', newWidth).
                        css('height', newHeight);
                    objCarousel.dom[_strTarget].w = newWidth;
                    objCarousel.dom[_strTarget].h = newHeight;
                    
                    domViewer.attr('data-resize', 'false');
                }, 1000);
            }
        });
    },

    /*
    Looks for desired carousel object. Destroy interval, unbinds
    listeners, clean up extra layers and remove attributes as well
    as html content in viewer div.
    _strTarget : String = ID name of carousel we want to destroy
    */
    destroy : function (_strTarget) {
        var obj = this.dom['_' + _strTarget];

        if (obj !== undefined) {
            clearInterval(obj.interval);

            var $buttonLayer = $('.' + this.labels.buttonLayer, obj.holder);

            $('.' + this.labels.prev, $buttonLayer).unbind('click').remove();
            $('.' + this.labels.next, $buttonLayer).unbind('click').remove();

            $('.' + this.labels.button, $buttonLayer).each(function() {
                $(this).unbind('click').remove();
            });

            $buttonLayer.remove();

            obj.viewer.html('').removeAttr('style');
            $('.' + this.labels.items, obj.holder).removeAttr('style');
            $('.' + this.labels.prev, obj.holder).removeAttr('style');
            $('.' + this.labels.next, obj.holder).removeAttr('style');
            $('.' + this.labels.button, obj.holder).removeAttr('style');

            obj = null;
            delete this.dom['_' + _strTarget];
        }
    }
};
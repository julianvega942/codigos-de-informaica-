var Timer = (function() {
    function Timer(callback, delay) {
      this.callback = callback;
      this.delay = delay;
      this.loop = true;
    }
  
    Timer.prototype.pause = function() {
      this.loop = false;
    };
  
    Timer.prototype.resume = function() {
      this.loop = true;
    };
  
    Timer.prototype.start = function() {
      var that = this;
      window.setTimeout(function() {
        if (that.loop) {
          that.callback();
        }
  
        that.start();
      }, this.delay);
    };
  
    return Timer;
  })();
  
  
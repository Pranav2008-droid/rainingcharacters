function Symbol(x, y, speed, first, opacity) {
    this.x = x;
    this.y = y;
    this.value;
  
    this.speed = speed;
    this.first = first;
    this.opacity = opacity;
  
    this.switchInterval = round(random(2, 25));
  
    this.setToRandomSymbol = function() {
      var charType = round(random(0, 5));
      if (frameCount % this.switchInterval == 0) {
        if (charType > 1) {
          // set it to Katakana
          this.value = String.fromCharCode(
            0x0000 + round(random(0, 1114112))
          );
        } else {
          // set it to numeric
          this.value = floor(random(0,10));
        }
      }
    }
  
    this.rain = function() {
      this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
  
  }
  
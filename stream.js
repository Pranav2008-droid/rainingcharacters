
function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5, 35));
    this.speed = random(15, 60);
  
    this.generateSymbols = function(x, y) {
      var opacity = 255;
      var first = round(random(0, 4)) == 1;
      for (var i =0; i <= this.totalSymbols; i++) {
        symbol = new Symbol(
          x,
          y,
          this.speed,
          first,
          opacity
        );
        symbol.setToRandomSymbol();
        this.symbols.push(symbol);
        
        y -= symbolSize;
        
      }
    }
  
    this.render = function() {
      this.symbols.forEach(function(symbol) {
        if (symbol.first) {
          fill(random(0, 200), random(0, 200), random(0, 200), symbol.opacity);
        } else {
          fill(random(0, 200), random(0, 200), random(0, 200), symbol.opacity);
        }
        text(symbol.value, symbol.x, symbol.y);
        symbol.rain();
        symbol.setToRandomSymbol();
      });
    }
  }
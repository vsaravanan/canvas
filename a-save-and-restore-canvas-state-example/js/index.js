function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
  ctx.save();                  // Save the default state
  ctx.fillStyle = '#09F';
  ctx.fillRect(15, 15, 120, 120);
  ctx.save();                  // Save the current state
  ctx.fillStyle = '#FFF';      // Make changes to the settings
  ctx.globalAlpha = 0.5; 
  ctx.fillRect(30, 30, 90, 90); 
  ctx.restore();               // Restore previous state
  ctx.fillRect(45, 45, 60, 60); 
  ctx.restore();               // Restore original state
  ctx.fillRect(60, 60, 30, 30); 
  
}draw();
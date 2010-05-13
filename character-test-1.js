function draw() { 
  var ctx = document.getElementById('main').getContext('2d');
  ctx.lineWidth = 6;
  ctx.lineCap = 'square';
  ctx.fillStyle = "#000";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.font = "38px Myriad Pro, sans-serif";

  draw_character(ctx, 400+90*-2 + 45, 300 - 190, 'flat', 'y', 'a', null);
  draw_character(ctx, 400+90*-1 + 45, 300 - 190, 'rising', 'sh', 'u', null);
  draw_character(ctx, 400+90*+1 - 45, 300 - 190, 'falling', 't', 'e', 'n');
  draw_character(ctx, 400+90*+2 - 45, 300 - 190, 'rising', null, 'a', 'ng');

  draw_character(ctx, 400+90*-2, 300 - 50, 'falling', 'm', 'a', null);
  draw_character(ctx, 400+90*-1, 300 - 50, 'rising', 'ch', 'e', 'n');
  draw_character(ctx, 400+90* 0, 300 - 50, 'falling', null, 'a', 'n');
  draw_character(ctx, 400+90*+1, 300 - 50, null, 't', null, null);
  draw_character(ctx, 400+90*+2, 300 - 50, 'flat', null, 'i', 'ng');

  draw_character(ctx, 400+90*-3, 300 + 100, 'falling', 'm', 'a', null);
  draw_character(ctx, 400+90*-2, 300 + 100, 'flat', null, 'u', 'ng');
  draw_character(ctx, 400+90*-1, 300 + 100, 'flat', 't', 'e', null);
  draw_character(ctx, 400+90* 0, 300 + 100, 'rising', 'g', 'a', null);
  draw_character(ctx, 400+90*+1, 300 + 100, 'flat', 'w', 'u', null);
  draw_character(ctx, 400+90*+2, 300 + 100, 'falling', 'r', 'o', null);
  draw_character(ctx, 400+90*+3, 300 + 100, 'falling', 'p', 'a', 'm');
}

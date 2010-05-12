tone = {
  rising: "#600",
  flat: "#060",
  falling: "#006"
}

consonant = {
  'y': [ [  90,   20,   0  ]
       , [  90,   40,  -10 ]
       , [  90,   40,   10 ]
       , [  90,   40,  -10 ]
       , [  90,   20,   0  ] ],
  't': [ [ "L",   90,   20 ]
       , [  135,  60,   0  ]
       , [ "L",  -135,  45 ]
       , [ -135,  30,  -10 ]
       , [  0,    30,   10 ] ],
  's': [ [ "L",  -90,   20 ]
       , [  180,  40,   0  ]
       , [  135,  50,  -10 ] ],
 none: [ [  180,  40,   0  ] ]
}

vowel = {
  'a': [ [ "L", 45,  40 ]
       , [ 180, 40, -10 ]
       , [ 90,  40, -10 ] ],
  'u': [ [ "L", 0,   20 ]
       , [ "L", 90,  20 ]
       , [ 180, 20,  5  ]
       , [ 0,   20, -5  ] ],
  'e': [ [ "L", 0,   10 ]
       , [ "L", 45,  20 ]
       , [ 180, 20,  10 ]
       , [ 90,  20,  10 ] ]
}

addition = {
  'n':  [ [ "L",  90,  35 ]
        , [ 90,   35,  0  ] ],
  'ng': [ [ "L",  90,  35 ]
        , [ 90,   35,  10 ]
        , [ "L", -90,  10 ]
        , [ -90,  35, -10 ] ]
}

function draw() { 
  var ctx = document.getElementById('main').getContext('2d');
  ctx.lineWidth = 6;
  ctx.lineCap = 'square';
  ctx.fillStyle = "#000";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.font = "36px Myriad Pro";
  ctx.save();
  ctx.translate(80, 150);
  ctx.strokeStyle = tone.flat;
  draw_figure(ctx, consonant.y);
  draw_figure(ctx, vowel.a);
  ctx.fillText("yā", 0, 60);
  ctx.restore();

  ctx.save();
  ctx.translate(160, 150);
  ctx.strokeStyle = tone.rising;
  draw_figure(ctx, consonant.s);
  draw_figure(ctx, vowel.u);
  ctx.fillText("shú", 0, 60);
  ctx.restore();

  ctx.save();
  ctx.translate(240, 150);
  ctx.strokeStyle = tone.falling;
  draw_figure(ctx, consonant.t);
  draw_figure(ctx, vowel.e);
  draw_figure(ctx, addition.n);
  ctx.fillText("tèn", 0, 60);
  ctx.restore();

  ctx.save();
  ctx.translate(320, 150);
  ctx.strokeStyle = tone.rising;
  draw_figure(ctx, consonant.none);
  draw_figure(ctx, vowel.a);
  draw_figure(ctx, addition.ng);
  ctx.fillText("áng?", 0, 60);
  ctx.restore();
}

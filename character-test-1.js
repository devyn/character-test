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
  'sh': [ [ "L",  -90,   20 ]
        , [  180,  40,   0  ]
        , [  135,  50,  -10 ] ],
   'm': [ [  180,  40,   0  ]
        , [ "L",   90,   20 ]
        , [  180,  40,  -30 ] ],
  'ch': [ [ "L",  -90,   10 ]
        , [  -135, 20,   0  ]
        , [  45,   25,   40 ] ],
  none: [ [  180,  40,   0  ] ]
}

vowel = {
  'a': [ [ "L",  45,  40 ]
       , [  180, 40, -10 ]
       , [  90,  40, -10 ] ],
  'u': [ [ "L",  0,   20 ]
       , [ "L",  90,  20 ]
       , [  180, 20,  5  ]
       , [  0,   20, -5  ] ],
  'e': [ [ "L",  0,   10 ]
       , [ "L",  45,  20 ]
       , [  180, 20,  10 ]
       , [  90,  20,  10 ] ],
  'i': [ [ "L",  90,  20 ]
       , [  180, 40,  0  ]
       , [  90,  10,  0  ]
       , [  90,  40,  0  ]
       , [ -90,  10,  0  ]
       , [ -90,  40,  0  ] ]
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
  ctx.font = "38px Myriad Pro, sans-serif";

  draw_character(ctx, 400+90*-2 + 45, 300 - 100, 'flat', 'y', 'a', null);
  draw_character(ctx, 400+90*-1 + 45, 300 - 100, 'rising', 'sh', 'u', null);
  draw_character(ctx, 400+90*+1 - 45, 300 - 100, 'falling', 't', 'e', 'n');
  draw_character(ctx, 400+90*+2 - 45, 300 - 100, 'rising', null, 'a', 'ng');

  draw_character(ctx, 400+90*-2, 300 + 40, 'falling', 'm', 'a', null);
  draw_character(ctx, 400+90*-1, 300 + 40, 'flat', 'ch', 'e', 'ng');
  draw_character(ctx, 400+90* 0, 300 + 40, null, 't', null, null);
  draw_character(ctx, 400+90*+1, 300 + 40, 'flat', 'y', 'a', 'n');
  draw_character(ctx, 400+90*+2, 300 + 40, 'flat', null, 'i', null);
}

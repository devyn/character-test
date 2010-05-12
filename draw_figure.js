function draw_figure(ctx, figure) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0,0);
  for (idx in figure) {
    var i = figure[idx];
    if (i[0] == "L") {
      ctx.rotate(i[1]*(Math.PI/180));
      ctx.moveTo(0, i[2]*-1);
      ctx.translate(0, i[2]*-1);
    } else {
      ctx.rotate(i[0]*(Math.PI/180));
      ctx.quadraticCurveTo(i[2], i[1]/-2, 0, i[1]*-1);
      ctx.translate(0, i[1]*-1);
    }
  }
  ctx.stroke();
  ctx.restore();
}

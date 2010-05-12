roman_tone_map = {};

roman_tone_map[[ 0, "a"]] = "ā";
roman_tone_map[[+1, "a"]] = "á";
roman_tone_map[[-1, "a"]] = "à";
roman_tone_map[[ 0, "i"]] = "ī";
roman_tone_map[[+1, "i"]] = "í";
roman_tone_map[[-1, "i"]] = "ì";
roman_tone_map[[ 0, "u"]] = "ū";
roman_tone_map[[+1, "u"]] = "ú";
roman_tone_map[[-1, "u"]] = "ù";
roman_tone_map[[ 0, "e"]] = "ē";
roman_tone_map[[+1, "e"]] = "é";
roman_tone_map[[-1, "e"]] = "è";
roman_tone_map[[ 0, "o"]] = "ō";
roman_tone_map[[+1, "o"]] = "ó";
roman_tone_map[[-1, "o"]] = "ò";


function draw_character(ctx, x, y, t, c, v, a) {
  ctx.save();
  ctx.translate(x, y);
  if (vowel[v]) ctx.strokeStyle = tone[t]||tone.flat;
  draw_figure(ctx, consonant[c]||consonant.none);
  if (vowel[v])    draw_figure(ctx, vowel[v]);
  if (addition[a]) draw_figure(ctx, addition[a]);
  var roman = "";
  if (consonant[c])
    roman += c;
  if (vowel[v]) {
    if (t == 'rising')
      roman += roman_tone_map[[+1, v]];
    else if (t == 'falling')
      roman += roman_tone_map[[-1, v]];
    else
      roman += roman_tone_map[[ 0, v]];
  }
  if (addition[a])
    roman += a;
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.fillText(roman, 0, 60);
  ctx.restore();
}

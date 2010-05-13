var sc, sv, sa, st;

function init() {
  sc = document.getElementById("s_consonant");
  sv = document.getElementById("s_vowel");
  sa = document.getElementById("s_addition");
  st = document.getElementById("s_tone");

  populate_form();
  redraw();
}

function populate_form() {
  sc.innerHTML = "<option value=''></option>";
  sv.innerHTML = "<option value=''></option>";
  sa.innerHTML = "<option value=''></option>";
  st.innerHTML = "";

  for (c in consonant)
    if (c != 'none') {
      var co = document.createElement("option");
      co.value = c;
      co.innerText = c;
      sc.appendChild(co);
    }

  for (v in vowel) {
    var vo = document.createElement("option");
    vo.value = v;
    vo.innerText = v;
    sv.appendChild(vo);
  }

  for (a in addition) {
    var ao = document.createElement("option");
    ao.value = a;
    ao.innerText = a;
    sa.appendChild(ao);
  }

  for (t in tone) {
    var to = document.createElement("option");
    to.value = t;
    to.innerText = t;
    st.appendChild(to);
  }

  st.value = "flat";
}

function redraw() {
  var ctx = document.getElementById("char").getContext("2d");
  ctx.lineWidth = 6;
  ctx.lineCap = 'square';
  ctx.fillStyle = "#000";
  ctx.textBaseline = "top";
  ctx.textAlign = "center";
  ctx.font = "38px Myriad Pro, sans-serif";

  ctx.clearRect(0, 0, 120, 180);

  draw_character(ctx, 60, 60, st.value, sc.value, sv.value, sa.value);
}

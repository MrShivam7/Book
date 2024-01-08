var i = 0;
var txt1 =
  "Aur tum jo sab mujhe kehte rehte ho ki usse bhul jao < Aur tum jo sab mujhe kehte rehte ho ki usse bhul jao < Tum hi btao kisiko bhulana itna asan hota hai kya < jis ko dil me basaya ho fhir, dil se nikalna itna asan hota hai kya < asan hai kya bhulana us shaks se ki hui baate < asan hai kya bhulana uske saath bitai hui vo raate < itna asan hota hai kya kisi ko paraya kr dena jis me tumhari duniya basti ho < usse apni duniya se alwida kr dena < are vo dil kashi nhi, ishq hai mera < are vo dil kashi nhi, ishq hai mera < mai chaha kr bhi usse bhula nhi paata < uske liye tadapte huye bhi us se baat nhi krta < ab dekho yaaro is se zyada sabar mai dikha nhi pata < vo meri hai jinn khawabo me, un khawabo ko mai mita nhi pata < mai har roz sochta hu, ki ab usse yaad na kru < par ab uski yaad ke bina mujhe saans nhi aata!! ";
var speed = 65;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

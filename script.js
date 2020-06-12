let lang = 'ru';

    if (lang == 'ru') {
	    var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  }
  
    if (lang == 'en') {
	    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
  }

    alert(arr);



let switchLang = 'ru';
  switch (switchLang){
    case 'ru':
      alert('пн, вт, ср, чт, пт, сб, вс');
    break;
    case 'en':
      alert('mn, ts, wd, th, fr, st, sn');
    break;
}

let lang03 = 'en';
let arr03 = {'ru':['пн','вт','ср','чт','пт','сб','вс'],
'en':['mo','tu','we','th','fr','sa','su']};

alert(arr03[lang03]);


let namePerson = prompt("Введите ваше имя");
namePerson === "Артем" ? console.log("директор") :
namePerson === "Максим" ? console.log("преподаватель") : 
console.log("cтудент");
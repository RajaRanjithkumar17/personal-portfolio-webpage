const t1 = document.getElementById('rside');
const t2 = document.getElementById('lside');

const ranjit = {
 nam:"ranjith",
 age:"24",
 mail:"rajaranjithkumar17@gmail.com"
}

const mani = {
    nam:"mani",
 age:"24",
 mail:"manidhaiyamech@gmail.com"
}
;

let tr = document.createElement('div');
for (let i = 0; i < 3; i++) {
  let txt = document.createElement('h1');
  txt.innerHTML = getEle(ranjit);
  tr.append(txt);
  t1.append(tr);
}




// t2
for (let i = 0; i < 3; i++) {
  let tr = document.createElement('div');  
  let txt = document.createElement('h1');
  txt.innerHTML = getEle(mani);
  tr.append(txt);  
  t2.append(tr);
}


function getEle(items) {
  console.log(items[1]); 
}
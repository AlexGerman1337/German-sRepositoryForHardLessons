let arr = ['236', '698', '547', '14', '496', '256', '245'];
const frst = ['2', '4'];

for (let v of arr) {
 if (frst.includes(String(v).charAt(0)))
  console.log(v);
}



let n = 100;

next:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue next; 
  }

  console.log('Число:' + i + ' Делители этого числа: 1 и ' + i);
};
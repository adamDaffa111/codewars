/**

jika diketahui x adalah penjumlahan bilangan ganjil dari 1 s/d 24. dan y adalah hasil penjumlahan bilangan genap dari 1 s/d 24. maka berlaku ?
A. x > y 
B. x < y  
C. x = y 
D. x = 2y 
E. y > 2x

**/


// penyelesaian 
let hasil_x = 0,
hasil_y = 0;

for (let i = 1; i <= 24; i++) {
  if (i%3 == 0) 
    hasil_x += i;
  if (i%2 == 0) 
    hasil_y += i;
}


console.log("x > y",hasil_x > hasil_y);
console.log("x < y",hasil_x < hasil_y);
console.log("x == y",hasil_x == hasil_y);
console.log("x > 2y",hasil_x > 2*hasil_y);
console.log("y > 2x",hasil_y > 2*hasil_y);


// answer B
// < ========== TASK C start ========== >
// Task C via callback
function checkLetter(str1, str2, callback) {
    if (str1.length !== str2.length) {
        callback(null, false);
    } 

    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    callback(null, sorted1 === sorted2);
}

checkLetter("qwerty", "ytrewq", (err, data) => {
    if (err) console.log(false);
    else {
        console.log(data);
    }
})


// Task C via async
// async function checkLetter(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     const sorted1 = str1.split('').sort().join('');
//     const sorted2 = str2.split('').sort().join('');

//     return sorted1 === sorted2;
// }

// (async () => {
//     const result1 = await checkLetter("qwerty", "ytrewq");
//     console.log(result1);

//     const result2 = await checkLetter("qwerftty", "ytrewq");
//     console.log(result2); 
// })();


// < ========== TASK C end ========== >




// < ========== TASK B start ========== >
// Task B via callback
// function countDigits(a, callback) {
//     if (typeof a !== "string") {
//         callback("insert a string!", null);
//     } else {
//         let count = 0; 
//         for (let i = 0; i < a.length; i++) {
//             if (!isNaN(a[i]) && a[i] !== " ") {
//                 count++;
//             }
//         }
//         callback(null, count); 
//     }
// }

// countDigits("bc5d32k6c23", (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });

// Task B via async func
// async function countDigits(a) {
//     if (typeof a !== "string") {
//         throw new Error("insert a string!");
//     } else {
//         let count = 0; 
//         for (let i = 0; i < a.length; i++) {
//             if (!isNaN(a[i]) && a[i] !== " ") {
//                 count++;
//             }
//         }
//         return count; 
//     }
// }

// countDigits("ewwye32hjsd2")
//     .then(count => {
//         console.log(count)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// < ========== TASK B end ========== >





// < ========== TASK A start ========== >
// Task A via callback
//  ⭐️ Synchronous function vs Asynchronous function
// Asynchronous: CALLBACK

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng bolmaydi", null);
//   } else {
//     const c = a % b;
//     callback(null, c, true);
//   }
// }

// // CALL
// qoldiqliBolish(5, 4, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("data:", data);
//     console.log("MATIQLAR ...");
//   }
// });

// function countLetter(letter, word, callback) {
//   if (typeof letter !== "string" || typeof word !== "string") {
//     callback("Both arguments must be strings", null);
//     return;
//   }
//   if (letter.length !== 1) {
//     callback("First argument must be a single character", null);
//     return;
//   }

//   setTimeout(() => {
//     let total = 0;
//     for (let char of word) {
//       if (char === letter) {
//         total++;
//       }
//     }

//     callback(null, total);
//   }, 1000); 
// }

// countLetter("e", "developer", (err, result) => {
//   if (err) console.log("ERROR:", err);
//   else console.log("Count:", result);
// });

// Task A via async

// async function countLetter(letter, word, callback) {
//     if(typeof letter !== "string" || typeof word !== "string") {
//         throw new Error("Both arguments must be strings");
//     };
    
//     if (letter.length !== 1) {
//         throw new Error("First argument must be a single character");
//     }


//     return new Promise((resolve) => {
//     setTimeout(() => {
//       let total = 0;
//       for (let char of word) {
//         if (char === letter) {
//           total++;
//         }
//       }
//       resolve(total); 
//     }, 1000);
//   });
// }


// countLetter("e", "develeeeoper")
//     .then(data => {
//         console.log('Javob:', data);
//     })
//     .catch(err => {
//         console.log('ERROR:', err);
//     });
// < ========== TASK A end ========== >


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi" //60
// ];

// // CALLBACK function
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         // setTimeout(function() {
//         //     callback(null, list[5]);
//         // }, 5000);
        
//         setInterval(function() {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log('javob:', data);
//     }
// });
// console.log('passed here 1');



// // ASYNC function
// // async function maslahatBering(a) {
// //     if(typeof a !== 'number') throw new Error("insert number");
// //     else if(a <= 20) return list[0];
// //     else if(a > 20 && a <= 30) return list[1];
// //     else if(a > 30 && a <= 40) return list[2];
// //     else if(a > 40 && a <= 50) return list[3];
// //     else if(a > 50 && a <= 60) return list[4];
// //     else {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(list[5]);
// //             }, 5000)
// //         })
// //     }
// // }

// // call via then/catch
// // console.log('passed here 0');
// // maslahatBering(25)
// //     .then(data => {
// //         console.log('Javob:', data);
// //     })
// //     .catch(err => {
// //         console.log('ERROR:', err);
// //     });
// // console.log('passed here 1');

// // call via async/await
// // async function run() {
// //     // let javob = await maslahatBering("34");
// //     // console.log(javob);
// //     // javob = await maslahatBering(70);
// //     // console.log(javob);
// //     // javob = await maslahatBering(41);
// //     // console.log(javob);

// //     try {
// //         let javob = await maslahatBering("34");  
// //         console.log(javob);
// //     } catch (err) {
// //         console.log("ERROR:", err.message);  
// //     }

// //     try {
// //         let javob = await maslahatBering(70);  
// //         console.log(javob);
// //     } catch (err) {
// //         console.log("ERROR:", err.message);
// //     }

// //     try {
// //         let javob = await maslahatBering(41);  
// //         console.log(javob);
// //     } catch (err) {
// //         console.log("ERROR:", err.message);
// //     }
// // }
// // run();
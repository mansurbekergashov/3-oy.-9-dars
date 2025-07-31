// ====================================
// ========== 1-masala: countdown =====
// ====================================
// Raqamdan 0 gacha sanab chiqadigan funksiya yozing.
// Input: countdown(5)
// Output: 5 4 3 2 1 0


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num -= 1;
    }

}
countDown(5)






// ====================================
// ========== 2-masala: printEven =====
// ====================================
// Arraydagi juft sonlarni chiqaring
// Input: [1, 2, 3, 4]
// Output: 2 4


function printEven(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        };
        i += 1;
    };

}
let elements = [1, 23, 43, 44, 12, 48, 4, 63, 13, 6];
printEven(elements);






// ====================================
// ========== 3-masala: countA ========
// ====================================
// Matnda nechta 'a' harfi borligini toping
// Input: "salom" -> Output: 1



function countA(arr) {
    let index = 0;
    let result = 0;
    while (index < arr.length) {
        if (arr[index] == "a") {
            result += 1;
        }
        index += 1;

    }
    return result;
}

console.log(countA("assalomu alaykum"));







// ====================================
// ========== 4-masala: sumArray =====
// ====================================
// Arraydagi sonlar yig'indisini toping
// Input: [3, 2, 1] -> Output: 6


function sumArray(a) {
    let i = 0;
    let sum = 0;
    while (i < a.length) {
        sum += a[i];
        i += 1;
    }

    console.log(sum);

}
let nums = [10, 3];
sumArray(nums);






// ====================================
// ========== 5-masala: reverseText ==
// ====================================
// Matnni teskari qilib chiqaring
// Input: "hi" -> Output: "ih"


function reverseText(str) {
    let i = str.length - 1;
    let reversed = "";
    while (i >= 0) {
        reversed += str[i];
        i -= 1;
    }
    console.log(reversed);
}
reverseText("Bu yerda matn teskari bo'ladi");






// ====================================
// ========== 6-masala: printNegative
// ====================================
// Arraydagi manfiy sonlarni chiqaring
// Input: [-1, 2, -3] -> Output: -1, -3


function printNegative(str) {
    let i = 0;
    while (i < str.length) {
        if (str[i] < 0) {
            console.log(str[i]);
        }
        i += 1;
    }
}

let numbers = [-1, 2, -3, 4, -5];
printNegative(numbers);





// ====================================
// ========== 7-masala: countChars ====
// ====================================
// Matndagi belgilar sonini aniqlang
// Input: "hello" -> Output: 5


function countChars(str) {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        count += 1;
        i += 1;
    }
    console.log(count);

}

let str = "hello";
countChars(str);






// ====================================
// ========== 8-masala: printOdds =====
// ====================================
// 0 dan n gacha toq sonlarni chiqaring
// Input: 5 -> Output: 1, 3, 5


function printOdds(n) {
    let i = 0;
    while (i <= n) {
        if (i % 2 == 1) {
            console.log(i);
        }
        i += 1;
    }
}

printOdds(15);






// ====================================
// ========== 9-masala: findMax =======
// ====================================
// Eng katta elementni toping
// Input: [1, 9, 3] -> Output: 9


function findMax(arr) {
    let i = 0;
    let max = arr[0];
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
        i += 1;
    }
    console.log(max);

}

let numberMax = [5, 45, 78, 1, 3, 4, 777];
findMax(numberMax);



// ====================================
// ========== 10-masala: countO =======
// ====================================
// Nechta 'o' harfi borligini toping
// Input: "hello world" -> Output: 2


function countA(arr) {
    let index = 0;
    let result = 0;
    while (index < arr.length) {
        if (arr[index] == "o") {
            result += 1;
        }
        index += 1;

    }
    return result;
}

console.log(countA("hello olam"));







// ====================================
// ========== 11-masala: countZeros ==
// ====================================
// Arraydagi 0 lar sonini chiqaring
// Input: [0, 1, 0] -> Output: 2


function countZeros(arr) {
    let i = 0;
    let count = 0;
    while (i < arr.length) {
        if (arr[i] == 0) {
            count += 1;
            console.log(count);
        }
        i += 1;
    }
}
let numbersList = [0, 1, 2, 5, 0, 0];
countZeros(numbersList);








// ====================================
// ========== 12-masala: sumPositive ==
// ====================================
// Musbat sonlar yig'indisini toping
// Input: [-1, 2, 3] -> Output: 5

// function sumPositive(arr) {
// 1. i = 0, sum = 0
// 2. agar arr[i] > 0 boâ€˜lsa, sum += arr[i]
// 3. Yakunida sum ni chiqaring
// }


function sumPositive(arr) {
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        if (arr[i] > 0) {
            sum += arr[i];
            console.log(sum);

        }
        i += 1;
    }
}
let allNums = [-1, 5, 3, -5];
sumPositive(allNums);







// ====================================
// ========== 13-masala: printLowercase
// ====================================
// Faqat kichik harflarni chiqaring
// Input: "Salom" -> Output: a, l, o, m

// function printLowercase(str) {
// 1. i = 0
// 2. charCodeAt bilan harfni tekshiring (97â€“122)
// 3. agar kichik boâ€˜lsa, chiqaring


function printLowercase(str) {
    let i = 0;
    while (i < str.length) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            console.log(str[i]);
        }
        i += 1;
    }
}
let text = "Salom";
printLowercase(text);







// ====================================
// ========== 14-masala: printOddIndexes
// ====================================
// Faqat toq indeksdagi elementlarni chiqaring
// Input: ['a','b','c','d'] -> Output: b, d


function printOddIndexes(arr) {
    let i = 0;
    while (i < arr.length) {
        if (i % 2 == 1) {
            console.log(arr[i]);
        }
        i += 1;
    }
}
let indexes = ['a', 'b', 'c', 'd']
printOddIndexes(indexes);







// ====================================
// ========== 15-masala: replaceE =====
// ====================================
// "e" harflarini "3" ga almashtiring
// Input: "hello" -> Output: h3llo

// function replaceE(str) {
// 1. i = 0, result = ""
// 2. agar str[i] === 'e' boâ€˜lsa, result += '3'
// 3. aks holda, result += str[i]
// 4. Yakunida result ni chiqaring
// }



function replaceE(str) {
    let i = 0;
    let result = "";
    while (i < str.length) {
        if (str[i] === "e") {
            result += '3';
        }
        else {
            result += str[i];
        }
        i += 1;
    }
    console.log(result);
}

let textE = "hello";
replaceE(textE);
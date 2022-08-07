//fCC JavaScript Solutions
//Owner
//jawacaser
//Modified
//Mar 14, 2022 by me
//Opened
//8:41 PM by me
//Created
//Mar 17, 2022 with Google Drive Web
//Add a description
//Viewers can download

function telephoneCheck(str) {
  let v1 = /^\d\d\d-\d\d\d-\d\d\d\d$/;
  let v2 = /^\(\d\d\d\)\d\d\d\-\d\d\d\d$/;
  let v3 = /^\(\d\d\d\)\s\d\d\d\-\d\d\d\d$/;
  let v4 = /^\d\d\d\s\d\d\d\s\d\d\d\d$/;
  let v5 = /^\d\d\d\d\d\d\d\d\d\d$/;
  let v6 = /^1\s\d\d\d\s\d\d\d\s\d\d\d\d$/;
  let v7 = /^1\(\d\d\d\)\d\d\d\-\d\d\d\d$/;
  let v8 = /^1\s\(\d\d\d\)\s\d\d\d\-\d\d\d\d$/;
  let v9 = /^1\s\d\d\d\-\d\d\d\-\d\d\d\d$/;
//console.log(v9.test("1 555-555-5555"))
  if (v1.test(str) || v2.test(str) || v3.test(str) || v4.test(str) ||
      v5.test(str) || v6.test(str) || v7.test(str) || v8.test(str) ||
      v9.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("(6054756961)");

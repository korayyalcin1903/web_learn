
//let isAactive = false;  // 0
//isAactive = true;  // 1
//console.log(isAactive);
//
//let userName;
//let isUserName = Boolean(userName);
//
//console.log(isUserName);
//
//
//Boolean("11");  // true
//Boolean("0");   // true
//Boolean("");    //false
//
//userName = "user";
//console.log("user name var mı?", Boolean(userName));
//
//Boolean(0) // false 
//Boolean(-0) // false
//Boolean(-0.1) // true
//Boolean(0 == 0) // true
//
//if(userName.length>0)
//{
//    document.write(userName, " ", userName.length, " harften oluşmaktadır...");
//}
//else
//{
//    document.write(userName, " boştur...");
//}
//
//let price = 111;
//let stringPrice = "111";
//let hasPassword = true;
//
//console.log(
//    "price: ",
//    typeof(price)
//)
//
//console.log(
//    "stringPrice: ",
//    typeof(stringPrice)
//)
//
//console.log(
//    "hasPassword: ",
//    typeof(hasPassword)
//)
//
//// string to float
//let number1 = "11";  // 11
//
//console.log(
//    "number1: ",
//    parseInt(number1), 
//    typeof(number1)
//);
//
//let number2 = "11px"; // 11
//
//console.log(
//    "number2: ",
//    parseInt(number2), 
//    typeof(number2)
//);
//
//let number3 = "px11"; //NaN
//
//console.log(
//    "number3: ",
//    parseInt(number3), 
//    typeof(number3)
//);
//
//let number4 = "11.4px";
//
//console.log(
//    "number4: ",
//    parseFloat(number4), 
//    typeof(number4)
//);
//
//let number5 = "11.4px";
//
//console.log(
//    "number5: ",
//    number5 = number5.toString(number5), 
//    typeof(number5)
//);

//const ad = "Koray"
//const soyad = "Yalçın"
//const yas = 19;
//
//const kisi = `
//<p>${ad}</>
//<p>${soyad}</>
//<p>${yas}</>
//`;
//document.body.innerHTML = kisi;

//let isim = '<h1>KORAY</>';
//document.body.innerHTML = isim;


//let email = "korayyalcin@gmail.com"
//let firstName = "koray"
//let lastName = "yalçın"
//
//// string karakter sayısı ---> lenght::
//
//console.log(email.length);
//
//// ilk karakteri bulmak --> [0] :
//
//console.log(firstName[0]);
//console.log(firstName.charAt(0));
//
//// büyük harf / küçük harf :
//
//firstName = firstName.toUpperCase();
//console.log(firstName);
//firstName = firstName.toLowerCase()
//console.log(firstName);
//// string içinde istediğimiz veriyi bulmak -->Search
//
//console.log(email.search("@"));
//console.log(email[12]);
//email.search('olmayan') // -1
//console.log(email.slice(0,11));
//
//// belli bir yere kadar al -->slice : (domain bilgisi)
//
//let domain = email.slice(email.search("@")+1)
//console.log(domain);
//console.log(
//    domain.slice(0, domain.indexOf('.'))
//);
////console.log("...........");
////let uzanti = email.slice(email.indexOf("@")+1,email.indexOf("."));
////
////if(uzanti == "gmail")
////{
////    console.log("GOOGLE")
////}
////else 
////{
////    console.log("FACEBOOK")
////}
//
//
//// biligiyi değişitirmek -->replace::
//
//email = email.replace('gmail.com', 'kodluyoruz.org')
//console.log(email);
//
////istediğimiz bilgi var mı -->includes :
//
//email.includes('@') // true
//email.includes('elkrne') // false
//
//// ilk harflerini büyük yapmak :
//
//let fullName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()+" "+lastName.charAt(0).toUpperCase()//+lastName.slice(1).toLowerCase();
//
//console.log(fullName);

//let url = "www.kodluyoruz.org";
//let language = "Java";
//
//let domain = url.slice(url.indexOf('.')+1,url.length);
//let userName = domain.slice(0,domain.indexOf('.'));
//console.log(domain);
//console.log(userName);

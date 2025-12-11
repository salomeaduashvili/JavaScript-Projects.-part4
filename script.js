const prompt = require("prompt-sync")();
/*
პროექტი 28 - File Extensions - ფაილის ტიპები
ფაილების უმეტესობას აქვს file extensions - სუფიქსები, რომელიც სახელწოდებაში წერტილის (.) 
შემდეგ წერია. მაგალითად, ფაილის სახელები GIF-ებისთვის მთავრდება .gif-ით, ხოლო JPEG-ების -
.jpg ან .jpeg-ით. ვებ ბრაუზერები, თავის მხრივ, ეყრდნობიან მედიის ტიპებს, რომელიც ადრე 
ცნობილი იყო, როგორც MIME ტიპები - ამით დგინდება, როგორ უნდა იყოს ნაჩვენები ფაილები, 
რომლებიც ინტერნეტშია. როდესაც ვებ სერვერიდან ფაილს ტვირთავთ, ეს სერვერი ე.წ. HTTP header-ს 
თავად ფაილთან ერთად გზავნის, რომელიც ფაილის მედიის ტიპზე მიუთითებს. მაგალითად, 
მედიის ტიპი GIF-ისთვის არის image/gif, ხოლო მედიის ტიპი JPEG-ისთვის არის image/jpeg.
ფაილის მედიის ტიპის დასადგენად, ვებ სერვერი, როგორც წესი, ფაილის გაფართოებას აკვირდება.

იხილეთ developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types 
ფაილის ტიპები სიისთვის.

შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს ფაილის სახელს და შემდეგ ბეჭდავს, 
იმ შემთხვევაში, თუ ფაილის სახელი ამ რომელიმე სუფისქით მთავრდება:

* .gif
* .jpg
* .jpeg
* .png
* .pdf
* .txt
* .zip

თუ ფაილის სახელი მთავრდება სხვა სუფიქსით ან საერთოდ არ აქვს სუფიქსი, 
დაბეჭდეთ application/octet-stream.

Example Output
```shell
< File name: Cat.gif
< image/gif
< File name: Cat.jpg
< image/jpeg
< File name: Cat
< application/octet-stream
```

p’roekt’i 28 - File Extensions - pailis t’ip’ebi pailebis umet’esobas akvs file extensions - supiksebi, romelits sakhelts’odebashi ts’ert’ilis (.) shemdeg ts’eria. magalitad, pailis sakhelebi GIF-ebistvis mtavrdeba .gif-it, kholo JPEG-ebis - .jpg an .jpeg-it. veb brauzerebi, tavis mkhriv, eq’rdnobian mediis t’ip’ebs, romelits adre tsnobili iq’o, rogorts MIME t’ip’ebi - amit dgindeba, rogor unda iq’os nachvenebi pailebi, romlebits int’ernet’shia. rodesats veb serveridan pails t’virtavt, es serveri e.ts’. HTTP header-s tavad pailtan ertad gzavnis, romelits pailis mediis t’ip’ze miutitebs. magalitad, mediis t’ip’i GIF-istvis aris image/gif, kholo mediis t’ip’i JPEG-istvis aris image/jpeg. pailis mediis t’ip’is dasadgenad, veb serveri, rogorts ts’esi, pailis gapartoebas ak’virdeba. ikhilet developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types pailis t’ip’ebi siistvis. shekmenit p’rograma, romelits stkhovs momkhmarebels pailis sakhels da shemdeg bech’davs, im shemtkhvevashi, tu pailis sakheli am romelime supiskit mtavrdeba: * .gif * .jpg * .jpeg * .png * .pdf * .txt * .zip tu pailis sakheli mtavrdeba skhva supiksit an saertod ar akvs supiksi, dabech’det application/octet-stream.
მეტის ჩვენება
1 159
Project 28 - File Extensions - File Types
Most files have file extensions - suffixes that appear after a period (.)
in the name. For example, GIFs end in .gif, while JPEGs end in .jpg or .jpeg. Web browsers, in turn, rely on media types, formerly known as MIME types, to determine how files are displayed on the Internet. When you download a file from a web server, the server sends an HTTP header with the file itself that indicates the media type of the file. For example, the media type for a GIF is image/gif, and the media type for a JPEG is image/jpeg. To determine the media type of a file, a web server typically looks at the file extension.

See developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
for a list of file types.

Create a program that prompts the user for a file name and then prints
if the file name ends with one of these suffixes:

* .gif
* .jpg
* .jpeg
* .png
* .pdf
* .txt
* .zip

If the file name ends with a different suffix or has no suffix at all,
print application/octet-stream.

*/

function files() {
  let fileName = prompt("Enter the file name: ").toLocaleLowerCase();
  if (fileName.endsWith(".gif")) {
    console.log("image/gif");
  } else if (fileName.endsWith(".jpg")) {
    console.log("image/jpeg");
  } else if (fileName.endsWith(".jpeg")) {
    console.log("image/jpeg");
  } else if (fileName.endsWith(".png")) {
    console.log("image/png");
  } else if (fileName.endsWith(".pdf")) {
    console.log("application/pdf");
  } else if (fileName.endsWith(".txt")) {
    console.log("text/plain");
  } else if (fileName.endsWith(".zip")) {
    console.log(
      "application/zip. Note, Windows uploads .zip files with the non-standard MIME type application/x-zip-compressed."
    );
  } else {
    console.log("application/octet-stream");
  }
}

files();

/*
პროექტი 29 - Math Interpreter - მათემატიკური ინტერპრეტატორი,
შექმენით პროგრამა, რომელიც მომხმარებლისგან იღებსარითმეტიკულ გამოთვლას, რომელსაც შემდეგ 
ახორციელებს და შედეგს ათწილადის სახით ბეჭდავს. დაუშვით, რომ მომხმარებლის input 
დაფორმატებული იქნება, როგორც x y z, თითო გამოტოვებით (space) x-სა და y-ს შორის, ისევე, 
როგორც y-სა და z-ს შორის. ამ გამოთვლაში:

x არის მთელი რიცხვი,
y არის +, -, *, ან /,
z არის მთელი რიცხვი,

მაგალითად, თუ input-ია 1 + 1, თქვენი პროგრამის output უნდა იყოს 2.0. დაუშვით, რომ თუ y 
არის /, მაშინ z არ იქნება 0.

Project 29 - Math Interpreter - Math Interpreter,
Create a program that takes an arithmetic calculation from the user,
then performs it, and prints the result as a decimal. Suppose the user's input is formatted as x y z, with a space between x and y, and
between y and z. In this calculation:

x is an integer,

y is +, -, *, or /,

z is an integer,

for example, if the input is 1 + 1, the output of your program should be 2.0. Suppose that if y
is /, then z will not be 0.

Example Output
< Expression: 1 + 1
< 2.0
< Expression: 4/3
< 1.3
< Expression: 100 - 1
< 99.0

*/
function mathInterpreter() {
  let mathExpression = prompt("Enter an expression: ");
  let [x, y, z] = mathExpression.trim().split(" ");
  x = Number(x);
  z = Number(z);
  let result;
  if (y === "+") {
    result = x + z;
  } else if (y === "-") {
    result = x - z;
  } else if (y === "*") {
    result = x * z;
  } else if (y === "/" && z === 0) {
    return "You can't divide a number by 0";
  } else if (y === "/") {
    result = x / z;
  } else {
    return "Wrong Input";
  }
  return `${mathExpression} = ${result.toFixed(1)}`;
}

console.log(mathInterpreter());

/*
პროექტი 30 - Meal Time - კვების დრო,
დავუშვათ, იმყოფებით ქვეყანაში, სადაც ჩვეულებრივ, საუზმეს 7:00-დან 8:00 საათამდე მიირთმევენ, 
ლანჩს - 12:00-დან 13:00 საათამდე, ხოლო ვახშამს - 18:00-დან 19:00 საათამდე. იქნებ კარგი იყოს
 ისეთი პროგრამის ქონა, რომელიც გეტყვით, როდის რა ჭამოთ?

შექმენით პროგრამა, რომელიც მომხმარებელს სთხოვს დროის შეყვანას და დაუბეჭდავს, საუზმის დროა,
 ლანჩის თუ - ვახშმის. თუ კვების დრო არაა, output საერთოდ არაფერი იქნება. ვივარაუდოთ, რომ 
 მომხმარებლის input-ის ფორმატირება მოხდება 24 საათში, როგორც: #:## ან ##:##. ასევე, დაუშვით, 
 რომ თითოეული კვების ინტერვალი ითვლება, ანუ, იქნება ეს 7:00, 7:01, 7:59, თუ 8:00, ან 7:00-სა
 და 8:00 საათს შორის ნებისმიერ დროს, თითოეულ შემთხვევაში საუზმის დროა.

შექმენით თქვენი პროგრამა ქვემოთ მოცემულის მიხედვით, სადაც კონვერტირება არის ფუნქცია (რომელიც 
შეიძლება გამოიძახოს main-ით), რომელიც გარდაქმნის დროს, str 24-საათიან ფორმატში, საათების 
შესაბამის რაოდენობაზე, როგორც float. მაგალითად, „7:30“ მსგავსი დროის გათვალისწინებით
 (ანუ 7 საათი და 30 წუთი), კონვერტაცია უნდა დააბრუნოს 7.5 (ანუ 7.5 საათი).

პროგრამაში შექმენით ფუნქცია სახელწოდებით convert, რომელიც დროის დაკონვერტირებაზე იზრუნებს - 
24-საათიანი ფორმატის სტრიქონს (string) გადაიყვანს შესაბამის საათობრივ რიცხვში, ათწილადის 
გამოყენებით. მაგალითად, "7:30" - 7 საათი და 30 წუთი, კონვერტაციის დროს 7.5 უნდა გახდეს.

Project 30 - Meal Time - Meal Time,
Let's say you are in a country where breakfast is usually served between 7:00 and 8:00,
lunch between 12:00 and 13:00, and dinner between 18:00 and 19:00. Would it be nice to
have a program that tells you when to eat what?

Create a program that asks the user for a time and prints out whether it is breakfast time,
lunch time, or dinner time. If it is not meal time, the output will be nothing at all. Suppose that
the user's input is formatted in 24-hour format as: #:## or ##:##. Also, assume that each meal interval is counted, i.e., whether it is 7:00, 7:01, 7:59, or 8:00, or any time between 7:00 and 8:00, in each case it is breakfast time.

Create your program as shown below, where convert is a function (which can be called from main) that converts the time, str , in 24-hour format, to the corresponding number of hours, as a float. For example, given a time like "7:30"
(i.e. 7 hours and 30 minutes), the conversion should return 7.5 (i.e. 7.5 hours).

Create a function called convert in the program that will take care of the time conversion -
converting the 24-hour format string to the corresponding hour number, using a decimal
number. For example, "7:30" - 7 hours and 30 minutes, should become 7.5 when converted.

Example Output
< What time is it? 7:00
< Breakfast time
< What time is it? 8:01
< What time is it? 18:01
< Dinner time
< What time is it? 18:59
< Dinner time */

function main() {
  let time = prompt("What time is it? ");

  function convert(time) {
    let [hour, minute] = time.split(":");
    hour = Number(hour);
    minute = Number(minute);
    let converted = hour + minute / 60;
    return converted;
  }

  let converted = convert(time);

  if (converted >= 7 && converted <= 8) {
    console.log("It's Breakfast time");
  } else if (converted >= 12 && converted <= 13) {
    console.log("It's Lunch time");
  } else if (converted >= 18 && converted <= 19) {
    console.log("It's Dinner time");
  } else {
    console.log("Wrong input");
  }
}
main();

/*
პროექტი 31 რიცხვების შეკრება დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ხუთ რიცხვს და გამოთვლის რიცხვების ჯამს.
project 31 Adding Numbers Write a program that prompts the user for five numbers and
computes the total of the numbers.


Example Output
Enter a number: 1
Enter a number: 2
Enter a number: 3
Enter a number: 4
Enter a number: 5
The total is 15.


he prompting must use repetition, such as a counted,
loop, not three separate prompts.
Create a flowchart before writing the program. 
*/

function userNumTotal() {
  let number;
  let total = 0;
  for (let i = 1; i <= 5; i++) {
    number = Number(prompt("Enter a number: "));
    total += number;
  }
  if (isNaN(total)) {
    console.log("Wrong input");
  } else {
    console.log(`The total is ${total}`);
  }
}

userNumTotal();

/*
პროექტი 32 - Tax Calculator - გადასახადის კალკულატორი,
მარტივი პრობლემების გადასაჭრელად ყოველთვის ჩახლართული საკონტროლო სტრუქტურა არაა საჭირო. 
ზოგჯერ პროგრამა ერთ შემთხვევაში დამატებით ნაბიჯს მოითხოვს, მაგრამ ყველა სხვა შემთხვევაში სხვა 
არაფერია გასაკეთებელი. დაწერეთ მარტივი პროგრამა შეკვეთის ოდენობისთვის დამატებითი გადასახადის
(tax) გამოსათვლელად. პროგრამამ უნდა მოითხოვოს შეკვეთის ოდენობა და შტატი. თუ შტატი არის 
„WI“, მაშინ შეკვეთას უნდა დაერიცხოს 5.5% გადასახადი. პროგრამამ უნდა დაბეჭდოს ქვეჯამი, 
გადასახადი და ჯამური გადასახდელი თანხა ვისკონსინის მცხოვრებლებისთვის, ხოლო სხვებისთვის -
მხოლოდ ჯამური თანხა.

*Project 32 - Tax Calculator - Tax Calculator,
It is not always necessary to have a complicated control structure to solve simple problems.
Sometimes a program requires an extra step in one case, but in all other cases, there is nothing else to do. Write a simple program to calculate the additional tax
on an order amount. The program should ask for the order amount and the state. If the state is
"WI", then a 5.5% tax should be charged on the order. The program should print a subtotal,
tax, and total amount due for Wisconsin residents, and just the total amount for others.

Example Output
< What is the order amount? 10
< What is the state? WI
< The subtotal is $10.00.
< The tax is $0.55.
< The total is $10.55.

< What is the order amount? 10
< What is the state? MN
< The total is $10.00*/

function taxCalculator() {
  let amount = Number(prompt("Enter the order amount: "));
  if (isNaN(amount)) {
    console.log("Wrong input");
    return;
  }

  let state = prompt("Enter your state: ").toUpperCase();
  let subtotal = amount.toFixed(2);
  let tax = amount * 0.055;
  let total1 = amount + tax;
  let total2 = `$${amount.toFixed(2)}`;
  if (state === "WI") {
    console.log(`The subtotal is $${subtotal}`);
    console.log(`The tax is $${tax.toFixed(2)}`);
    console.log(`The total is $${total1.toFixed(2)}`);
  } else {
    console.log("The total is", total2);
  }
}

taxCalculator();

/*
პროექტი 33 - Password Validation - პაროლის ვალიდაცია,
პაროლის ვალიდაცია ხდება მომხმარებლის მიერ მოწოდებული მნიშვნელობის შედარებით შენახულ 
მნიშვნელობასთან. პაროლი ან სწორია, ან არა. შექმენით მარტივი პროგრამა, რომელიც პაროლის 
ვალიდაციას აკეთებს. პროგრამამ უნდა მოითხოვოს მომხმარებლის სახელი და პაროლი, უნდა შეადაროს 
მომხმარებლის მიერ ჩაწერილი პაროლი ცნობილ პაროლს. თუ ეს ორი ერთმანეთს ემთხვევა, პროგრამამ 
უნდა აჩვენოს "Welcome!",  თუ არ ემთხვევა, უნდა გამოჩნდეს „I don't know you“.

Project 33 - Password Validation - Password Validation,
Password validation is done by comparing the value provided by the user with the stored
value. The password is either correct or incorrect. Create a simple program that
validates a password. The program should prompt for a username and password, and compare the password entered by the user with a known password. If the two match, the program should
display "Welcome!", if they do not match, it should display "I don't know you".

Example Output
< What is the password? 12345
< I don't know you.

< What is the password? abc$123
< Welcome!*/

function logIn() {
  let name = prompt("Enter your username: ");
  let password = prompt("Enter your password: ");
  let userName = "developer";
  let userPassword = "!a1b2c3";

  if (name === userName && password === userPassword) {
    console.log("Welcome!");
  } else {
    console.log("I don't know you");
  }
}

logIn();

/*
პროექტი 34 - Legal Driving Age - მართვის კანონიერი ასაკი,
თქვენ შეგიძლიათ შეამოწმოთ, თანაბარია თუ არა ორი რიცხვი, მაგრამ შეიძლება დაგჭირდეთ ასევე იმის 
გატესტვა, როგორ დარდება input-ის რიცხვი ცნობილ მნიშვნელობას, ხოლო ამის მიხედვით აჩვენოთ 
შეტყობინება, მოცემული რიცხვი მეტისმეტად დაბალია თუ - მაღალი. დაწერეთ პროგრამა, რომელიც 
კითხულობს მომხმარებელს ასაკს და შეადარეთ ის კანონიერად მართვის ასაკს - 16-ს. თუ მომხმარებელი 
არის 16 წლის ან მეტის, მაშინ პროგრამაში უნდა გამოჩნდეს „You are old enough to legally drive.“.
თუ მომხმარებელი 16 წელზე ნაკლები ასაკისაა, პროგრამამ უნდა აჩვენოს: „You are not old enough to 
legally drive.“

Project 34 - Legal Driving Age - You can test whether two numbers are equal, but you may also want to test how the input 
number compares to a known value, and display a message if the number is too low or too high. Write a program that asks 
the user for their age and compares it to the legal driving age of 16. If the user is 16 or older, the program should display 
"You are old enough to legally drive." If the user is under 16, the program should display "You are not old enough to legally drive."

Example Output
< What is your age? 15
< You are not old enough to legally drive.

< What is your age? 35
< You are old enough to legally drive. */

function lisance() {
  let legalAge = 16;
  let userAge = Number(prompt("Enter your age:"));
  if (userAge <= 0 || isNaN(userAge)) {
    do {
      userAge = Number(prompt("Wrong Input! Try again:"));
    } while (userAge <= 0 || isNaN(userAge));
  }

  if (userAge >= legalAge) {
    console.log("You are old enough to legally drive.");
  } else {
    console.log("You are not old enough to legally drive.");
  }
}

lisance();

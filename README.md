# JavaScript Practice - Interactive Console Projects: 19–27;

This project contains JavaScript console-based exercises, each designed to strengthen understanding of strings, numbers, user input, functions, loops, arrays, objects and conditionals.
Tasks use prompt-sync to collect user input and run directly in the terminal.

ეს პროექტი შეიცავს ინტერაქტიულ JavaScript ამოცანას, რომლებიც დაგეხმარებათ სტრიქონების, რიცხვების, ფუნქციების, ციკლების, მასივების, ობიექტებისა და პირობითი ოპერატორების უკეთ გაგებაში.
ამოცანა ტერმინალში მუშაობს და მომხმარებლის ინფუთს იღებს prompt-sync–ით.

---

## 📚 Projects / პროექტები

### **28. File Extensions – ფაილის ტიპები**

Determine the correct MIME type based on a file extension.  
განსაზღვრავს ფაილის MIME ტიპს გაფართოების მიხედვით.

**Supports:** `.gif`, `.jpg`, `.jpeg`, `.png`, `.pdf`, `.txt`, `.zip`  
**Others →** `application/octet-stream`.

### **29. Math Interpreter – მათემატიკური ინტერპრეტატორი**

Reads an arithmetic expression like `x y z` and calculates the result.  
Accepts operators: `+`, `-`, `*`, `/`.

**Example:**  
`1 + 1 → 2.0`  
`4 / 3 → 1.3`

### **30. Meal Time – კვების დრო**

User enters time `HH:MM`.  
Program determines if it is:

- **Breakfast** (7:00–8:00)
- **Lunch** (12:00–13:00)
- **Dinner** (18:00–19:00)

Otherwise prints nothing.

მომხმარებლის შეყვანილი დროის მიხედვით აფიქსირებს კვების დროს.

### **31. Adding Numbers – რიცხვების შეკრება**

Prompts the user for **five numbers** and calculates the total.  
მომხმარებელს სთხოვს 5 რიცხვს და ჯამს ბეჭდავს.

Uses a loop (not 5 separate prompts).

### **32. Tax Calculator – გადასახადის კალკულატორი**

If state is **WI**, adds **5.5% tax** and prints:

- Subtotal
- Tax
- Total

Otherwise prints only total.

### **33. Password Validation – პაროლის ვალიდაცია**

Compares input username & password with stored values.  
Correct → **Welcome!**  
Incorrect → **I don't know you.**

### **34. Legal Driving Age – მართვის კანონიერი ასაკი**

Compares user age with **16** (legal driving age).

- ≥ 16 → **allowed**
- < 16 → **not allowed**

Also validates wrong input.

---

## 🚀 Run the project / გაშვება

1. Install Node.js
2. Install **prompt-sync**
   ```bash
   npm install prompt-sync
   ```
3. Run the script:

```bash
node script.js
```

---

## 📝 Technologies Used / გამოყენებული ტექნოლოგიები

- **JavaScript**
- **Node.js**
- **prompt-sync**

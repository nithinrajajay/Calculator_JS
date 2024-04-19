
      // addition
      function add(num1, num2) {
        return num1 + num2;
      }
      //subtraction
      function sub(num1, num2) {
        return num1 - num2;
      }
      //multiplication
      function multi(num1, num2) {
        return num1 * num2;
      }
      //division
      function divi(num1, num2) {
        return num1 / num2;
      }
      function calculate() {
        var ans;
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var opt = document.getElementById("opt").value;

        if (opt == "+") {
          ans = add(num1, num2);
        } else if (opt == "-") {
          ans = sub(num1, num2);
        } else if (opt == "*") {
          ans = multi(num1, num2);
        } else if (opt == "/") {
          ans = divi(num1, num2);
        } else {
          ans = "invalid input";
        }
        console.log(ans);
        document.getElementById("ans").value = ans;
      }
   
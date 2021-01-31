// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah" || "Bram";
const totalAmount = 25;

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = herman; 
*/

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen"
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Welkom, leuk dat je er bent!");
}

if (name = ("Sarah") || name = ("Bram")) {
  console.log("Je krijgt een gratis biertje!");
}  else  {
  console.log("Welkom!");
}

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Je krijgt gratis bitterballen")
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("Je krijgt gratis nacho's");
} else if (totalAmount >= 100) {
  console.log("je krijgt gratis champagne");
}

let katzDeliLine = [];

function takeANumber(katzDeliLine){ 
  let placeInLine = katzDeliLine.length + 1;
  let welcomeMessage = "Welcome, " + newCustomer + ". You are number " + placeInLine + " in line."; 
  katzDeliLine.push("addPerson");
  return welcomeMessage;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) 
  return 'There is nobody waiting to be served!'
  
  else {
  let currentlyServing = katzDeliLine[0]; // def variable currentlyServing to 1st person 
  katzDeliLine.splice(0, 1); //Deletes the first person in the line (from index 0) SWITCH TO SHIFT
  return `Currently serving ${currentlyServing}.`; // 
  }
}

function currentLine(katzDeliLine) {
    if (katzDeliLine.length === 0) {
      return "The line is currently empty."
    }
    let line = "" //empty string
    for(var i = 0; i < katzDeliLine.length; i++) { // the loop

        let customerName = katzDeliLine[i] 
        let customerNumber = i + 1 // otherwise Anil would be customer 0
        line += customerNumber + ". " + customerName + ", " // += take existing string, and add this on to it
    }
    // line has an extra comma/space at the end
    line = line.slice(0, line.length-2)
    return "The line is currently: " + line
}
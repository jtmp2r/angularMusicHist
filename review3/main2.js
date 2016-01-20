var grades = [85, 50, 99, 65, 85, 94, 76];
var gradeScale = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var highestNumber = grades[0];
var lowestNumber = grades[0];
var A = 0
var B = 0
var C = 0
var D = 0
var F = 0

for (var i = 0; i < grades.length; i++) {
	if (grades[i] <= 60) {
	  F += 1;
	}
    else if (grades[i] <= 70) {
      D += 1;
    }
    else if (grades[i] <= 80) {
      C += 1;
    }
    else if (grades[i] <= 90) {
      B += 1;
    }
    else {
      A += 1;
    }
    if (grades[i] > highestNumber) {
    	highestNumber = grades[i]
    }
    if (grades[i] <= lowestNumber) {
        lowestNumber = grades[i]
    }
}
    console.log(highestNumber);
    console.log(lowestNumber);
    document.write()
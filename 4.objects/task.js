function Student(name, gender, age) {
      this.name = name,
      this.age = age,
      this.gender = gender;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = Student.prototype.addMarks = function () {
  if (!this.hasOwnProperty("marks")) {
    this.marks = new Array();
  }
  this.marks.push(...arguments);
}

Student.prototype.exclude = function (reason) {
  delete this.mark;
  delete this.subject;
  this.excluded = reason;
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (const item in this.marks){
    sum += this.marks[item];
  }
  return Number(sum / this.marks.length);
}

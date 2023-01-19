class Student {
    constructor(name, roll, branch) {
        this.name = name
        this.roll = roll
        this.branch = branch
    }

    cources = []

    getInfo()//.        Method 
    {
        return { name: this.name, roll: this.roll, branch: this.branch }
    }

    Enroll_Course(name) {
        this.cources.push(name)
    }

    Get_Course() {
        return this.cources;
    }

    static fun(){console.log("This is private not for inheritance");}

}

module.exports = Student; //.   For Throw or export
 
//. For Import
// import Student from "./Class_1"; //.   First method to import
// const Student = require("./Class_1")



// const Faraz = new Student("Faraz", 191044, "CSE")

// console.log(Faraz.getInfo()); //.       Dummping out information
// console.log(Faraz.getInfo().branch); //.For Accessing Specific element


// Faraz.Enroll_Course("Bio")
// Faraz.Enroll_Course("Cyber Security")
// Faraz.Enroll_Course("IOT")
// Faraz.Enroll_Course("Soft Skill")

// console.log(Faraz.Get_Course())
// let x = Faraz.Get_Course()

// x.forEach(i => console.log(i)) //.      Iterating each element
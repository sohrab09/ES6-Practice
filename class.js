class student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.dept = "CSE";
    }
}

const student1 =new student (234, "Rahim");
const student2 =new student (244, "Karim");
const student3 =new student (224, "Malik");
const student4 =new student (214, "Selim");

console.log(student1, student2, student3, student4);

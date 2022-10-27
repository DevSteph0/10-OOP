const Employee = require("Employee")
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email)
        this.school = school

    }
    getRole(){
        return "Employee"
    }
    getSchool(){
        return this.school
    }
       
    
}
 modules.export=Intern
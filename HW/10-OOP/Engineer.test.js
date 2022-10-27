const Employee = require("Employee")
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email,github)
        this.school = school

    }
    getRole(){
        return "Github"
    }
    getGithub(){
        return this.github
    }
       
    
}
 modules.export=Engineer
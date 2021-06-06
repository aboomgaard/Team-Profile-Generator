// const { TestScheduler } = require("@jest/core");
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

describe("Employee", () => {
    describe("initial", () => {
        it("Should create an object with employee name, id, and email", () => {
            const employee = new Employee("Employee", 123, "employee@job.com");
            expect(employee).toEqual({name: "Employee", id: 123, email: "employee@job.com"});
        });
    });
   
    test ("Can Instantiate Employee", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");
    })
    
    test ("can get name with getName function", () => {
        const employee = new Employee("Employee", 123, "employee@job.com");
        expect(employee.getName()).toBe(employee.name);
    })

      test ("can get id with getID function", () => {
        const employee = new Employee("Employee", 123, "employee@job.com");
        expect(employee.getId()).toBe(employee.id);
    })
    
    test ("can get email with getEmail function", () => {
        const employee = new Employee("Employee", 123, "employee@job.com");
        expect(employee.getEmail()).toBe(employee.email);
    })
    
    test ("can get role with getRole function", () => {
        const employee = new Employee("Employee");
        expect(employee.getRole()).toBe("Employee", 123, "employee@job.com");
    })
})
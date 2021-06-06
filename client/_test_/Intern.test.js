const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Extend", () => {
        //checks that an employee is being created as an intern
        it("Should create an employee called intern with a school", () => {
            const intern = new Intern("Employee", 123, "employee@job.com", "schoolname");
            expect(intern).toEqual({name: "Employee", id: 123, email: "employee@job.com", school: "schoolname"});
        });
    });

    test ("Can get role with the getRole function", () => {
        const intern = new Intern("Employee", 123, "employee@job.com", "schoolname");
        expect(intern.getRole()).toBe("Intern");
    })

    test ("can get school with function", () => {
        const intern = new Intern("Employee", 123, "employee@job.com", "schoolname");
        expect(intern.getSchool()).toBe(intern.school);
    })
})
const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Extend", () => {
        //checks that an employee is being created as an intern
        it("Should create an employee called manager with an office number", () => {
            const manager = new Manager("Employee", 123, "employee@job.com", "officeNumber");
            expect(manager).toEqual({name: "Employee", id: 123, email: "employee@job.com", officeNumber: "officeNumber"});
        });
    });

    test ("Can get role with the getRole function", () => {
        const manager = new Manager("Employee", 123, "employee@job.com", "officeNumber");
        expect(manager.getRole()).toBe("Manager");
    })

    test ("can get office number with function", () => {
        const manager = new Manager("Employee", 123, "employee@job.com", "officeNumber");
        expect(manager.getOfficeNumber()).toBe(manager.officeNumber);
    })
})
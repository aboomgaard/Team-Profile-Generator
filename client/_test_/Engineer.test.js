const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Extend", () => {
        it("Should create an employee called engineer with a GitHub username", () => {
            const engineer = new Engineer("Employee", 123, "employee@job.com", "githubusername");
            expect(engineer).toEqual({name: "Employee", id: 123, email: "employee@job.com", gitHub: "githubusername"});
        });
    });

    test ("Can get role with the getRole function", () => {
        const engineer = new Engineer("Employee", 123, "employee@job.com", "githubusername");
        expect(engineer.getRole()).toBe("Engineer");
    })

    test ("can get GitHub username with function", () => {
        const engineer = new Engineer("Employee", 123, "employee@job.com", "githubusername");
        expect(engineer.getGitHub()).toBe(engineer.gitHub);
    })
})
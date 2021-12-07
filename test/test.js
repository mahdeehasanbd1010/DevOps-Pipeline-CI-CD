const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with CI CD Devops Pipeline", (done) => {
        request(app).get("/").expect("Welcome to CI CD Devops Pipeline!!", done);
    })
});

describe("GET /gun/4/5", (responds) => {
    it("responds with right", (done) => {
        request(app).get("/gun/4/5").expect('multiplication : 20' , done);
    })
});

describe("GET /div/4/5", (responds) => {
    it("responds with right", (done) => {
        request(app).get("/div/4/5").expect('division : 0.8' , done);
    })
});

describe("GET /div/4/0", (responds) => {
    it("responds with right", (done) => {
        request(app).get("/div/4/0").expect('division : invalid output' , done);
    })
});
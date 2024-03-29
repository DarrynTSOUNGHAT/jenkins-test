const request = require("supertest");
const app = require("../index");

describe("Get route", () => {
  it("page should return hello world", async () => {
    

    try {
        const res = await request(app).get("/");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual("Hello world");
    
    } catch (err) { console.log(err);}
  });
});


afterAll(async () => {
    await app.close();
});
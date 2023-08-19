const { fixture, test, Selector } = require("testcafe");

fixture('Login Suite').page('https://beta.deepthought.education/');
test('1	Test successful login with valid credentials',async t =>{
    await t
    .typeText("#username","Sharad4251")
    .typeText("#password","Budhidih199")
    .click("#login")
    .expect(Selector(".bold-font").innerText).eql(' Tools')

})
test('2	Test unsuccessful login attempts with invalid credentials.',async t =>{
    await t
    .typeText("#username","Sharad421")
    .typeText("#password","Budhidih199")
    .click("#login")
    .expect(Selector(".alert").innerText).eql('×\nLogin Unsuccessful\n\nInvalid login credentials')

})
test('3	Validate that appropriate error messages are displayed for invalid login attempts.',async t =>{
    await t
    .typeText("#username","Sharad421")
    .typeText("#password","Budhidih199")
    .click("#login")
    .expect(Selector(".alert").innerText).eql('×\nLogin Unsuccessful\n\nInvalid login credentials')

})
test('4	On successful login, validate that the user is redirected to the dashboard screen.',async t =>{
    await t
    .typeText("#username","Sharad4251")
    .typeText("#password","Budhidih199")
    .click("#login")
    const currentURL=await t.eval(()=>window.location.href);
    await t.expect(currentURL).eql('https://beta.deepthought.education/dashboard');

})
;
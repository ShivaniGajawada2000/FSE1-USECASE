describe('My First Test', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL
  })

  it('Testing for Login', () => {
   
    cy.visit('http://localhost:3000/login')
    cy.get("span").contains("Login")
  })

  it('Testing for All Product', () => {
   
    cy.visit('http://localhost:3000/all')
    cy.get("img").should(
      "have.attr",
      "src",
      "./mobile_banner.jpg"
    );

   
  })

  it('Testing for Registration', () => {
   
    cy.visit('http://localhost:3000/register')
    cy.get("button").contains("Sign Up")
  })

  it('Testing for Update', ()=>{
    cy.visit('http://localhost:3000/update');
    cy.get(".form-label").contains("Update")

  })

})
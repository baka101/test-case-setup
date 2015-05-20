describe('Test Cases', function() {

  //declare stuff here that needs to be run once
  var result = true;
  function returnTrue () {
    return result;
  }

  beforeEach(function() {
    //add stuff here that needs to be run before every test

  });

  
  ///////////////////////////////////////
  //add test cases here
  ///////////////////////////////////////
  

  it('returnTrue function should return true', function() {
    expect(returnTrue()).to.equal(true);
  });


});

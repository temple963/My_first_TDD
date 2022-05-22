    const Spiderman =require("../app/Spiderman")

describe("Unit Test for spiderman class ", () => {
    test('Case 1: Create object spiderman', () => {
      
      
      
        const andrewGarfield = new Spiderman("Spiderman sony",31,"Andrew Garfield",2,"Sony")
        expect(andrewGarfield.name).toBe("Spiderman sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")

    });

})
  
    describe("Unit test for spiderman 2",()=>{
    test('Case 2: Tomholland get info', ()=>{

        const TomHolland = new Spiderman("spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(TomHolland.getInfo()).toBe("Hey, Im Tom Holland from Marvel studios")
            });
    
})
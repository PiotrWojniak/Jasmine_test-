describe("whatCanIDrink", function() {
    
    beforeEach(function(){
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return Sorry. I can’t tell what drink because that age is incorrect! when called whatCanIDrink(0)", function(){
            var result = whatCanIDrink(0)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return drink toddy when called as whatCanIDrink(14)", function(){
            var result = whatCanIDrink(14)
            expect(result).toBe("Drink Toddy");
        
        });

        it("should return drink coke when called as whatCanIDrink(18)", function(){
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Coke");
        
        });

        it("should return drink beer when called as whatCanIDrink(21)", function(){
            var result = whatCanIDrink(21)
            expect(result).toBe("Drink Beer");
        
        });

        it("should return drink whisky when called as whatCanIDrink(130)", function(){
            var result = whatCanIDrink(130)
            expect(result).toBe("Drink Whisky");
        
        });

        it("should contain whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});    
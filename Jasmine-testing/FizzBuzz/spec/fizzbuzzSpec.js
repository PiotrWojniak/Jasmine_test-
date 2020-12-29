describe("My fizzBuzz function", function () {

    beforeEach(function () {
        fizzBuzz = new fizzBuzz();
    });

    describe("Check numbers", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz if divisible by 3 and 5", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz if divisible by 3", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });

        it("should return Buzz if divisible by 5", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });

        it("should return 2 if not divisible by 3 or by 5", function () {
            var result = fizzBuzz(2);
            expect(result).toBe(2);
        });

    });
});


whatCanIDrink = function(age){
    if (age < 0) {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    } else if (age > 0 && age < 15) {
        return "Drink Toddy";
    } else if (age > 14 && age < 19) {
        return "Drink Coke";
    } else if (age > 18 && age < 22) {
        return "Drink Beer";
    } else if ( age > 21 && age < 131) {
        return "Drink Whisky";
    } else {
        return "Sorry. I can’t tell what drink because that age is incorrect!"
    }
};


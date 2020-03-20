$.isBlank = function(obj) {
    return (!obj || $.trim(obj) === "");
};

// $.isBlank("a") //false
// $.isBlank(" ") //true
// $.isBlank("") //true
// $.isBlank("\n") //true
// $.isBlank(null) //true
// $.isBlank(undefined) //true
// $.isBlank(false) //true
// $.isBlank([]) //true
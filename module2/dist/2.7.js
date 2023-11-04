"use strict";
{
    const skill = "javascript";
    const skill2 = "nextJS";
    const user = {
        name: "Mostafizur Rahaman",
        age: 20,
        isVerified: true,
    };
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    const property1 = getPropertyValue(user, "isVerified");
    console.log(property1);
}

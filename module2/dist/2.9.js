"use strict";
{
    function find_max(nums) {
        let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
        console.log(max_num);
        for (let num of nums) {
            if (num > max_num) {
                max_num = num;
            }
        }
        return max_num;
    }
    console.log(find_max([5, 10, 0, 40]));
}

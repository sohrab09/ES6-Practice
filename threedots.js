const ages = [12, 14, 15, 13];
const ages2 = [18, 10, 20, 17];
const ages3 = [25, 27,29];
const ages4 = [35, 37,39];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = ages.concat(ages2, ages3, ages4);
console.log(allAges2);
const createOutfit = function (shirt, pants) {
    const outfit = {
        shirt: shirt,
        pants: pants,
        isNew: false,
        showOff: function () {
            this.isNew = true;
            console.log("Show-off your brand new outfit!");
        }
    };
    return outfit;
};
console.log(createOutfit());

const tuesday = createOutfit("white", "black");
const wednesday = createOutfit("pink", "gray")

console.log(tuesday);
console.log(wednesday);

for (let key in tuesday) {
    console.log(key, tuesday[key]);
}
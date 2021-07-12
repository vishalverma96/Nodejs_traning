const add = (a , b)=>{
    return a + b;
};

const  sub = (a , b)=>{
    return a-b;
};

const  mult = (a , b)=>{
    return a*b;
};


const name = "vishu"
// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.name = name;

module.exports = {add , sub, name, mult};
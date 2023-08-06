const great=setInterval(() => {
    console.log('i will great things, so help me God!')
}, 2000);

setTimeout(() => {
    clearInterval(great);
}, 10000);
console.log(__dirname);
console.log(__filename);
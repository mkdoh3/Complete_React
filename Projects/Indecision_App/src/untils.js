const hi =  () => {
    console.log('utils.js is running');
}
const add = (a,b) => a + b; 

const subtract = (a,b) => a-b;


export { hi, add, subtract as default }
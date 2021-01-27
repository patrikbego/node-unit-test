let lib = {
  simpleSum(a, b) {
    return a + b;
  },
  strictSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw Error('Invalid Arguments');
    }
  },
  promiseSum(a, b) {
    const sum = (a, b) => a + b;

    const rej = () => {
      throw Error('Invalid Arguments');
    };
    let serviceResponse =  new Promise((resolve, reject) => {
      if (typeof a === 'number' && typeof b === 'number') {
        setTimeout(() => {
          resolve(sum(a, b));
          console.log('summing up !');
        }, 5000, a, b);
      } else {
        reject(rej());
      }
    });
    return serviceResponse;
  },
};
module.exports = lib;

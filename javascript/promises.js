const myPromise = new Promise((resolve, reject) => {
  if (5 % 2 == 0) {
    resolve("even");
  } else {
    reject("not an even");
  }
});

myPromise.then((res) => console.log(res)).catch((rej) => console.log(rej));

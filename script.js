function threeSum(decimal) {
  // write your code here
  console.log(decimal);
  let midans = "";
  while (decimal !== 0) {
    let rem = decimal % 2;

    let str = rem.toString();
    midans = midans + str;
    decimal = parseInt(decimal / 2);
  }
  let revans = "";

  for (let j = midans.length - 1; j >= 0; j--) {
    revans += midans.charAt(j);
  }
  console.log(revans);
}


module.exports = threeSum;

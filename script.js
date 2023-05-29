function threeSum(arr, target) {
  // write your code here
  console.log(arr);
  let midans = "";
  while (arr !== 0) {
    let rem = arr % 2;

    let str = rem.toString();
    midans = midans + str;
    arr = parseInt(arr / 2);
  }
  let revans = "";

  for (let j = midans.length - 1; j >= 0; j--) {
    revans += midans.charAt(j);
  }
  console.log(revans);
	return revans;
}

module.exports = threeSum;

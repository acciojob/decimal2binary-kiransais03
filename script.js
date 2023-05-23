function threeSum(decimal) {
// write your code here
	let ans="";
	for(let i=0;decimal>=0;i++)
		{
			let rem=decimal%2;
			midans=midans+${rem};
		}
	let revans="";

	for(let j=ans.length-1;j>=0;j++)
		{
			revans +=ans[j];
		}
  console.log(revans);
}

module.exports = threeSum;

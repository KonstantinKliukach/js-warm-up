/*
  Given an array of integers nums.

  A pair (i,j) is called good if nums[i] == nums[j] and i < j.

  Return the number of good pairs.

  

  Example 1:

  Input: nums = [1,2,3,1,1,3]
  Output: 4
  Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

function numIdenticalPairs(nums: number[]): number {
  return nums.reduce((sum, num, i) => {
    for (let j = i + 1; j < nums.length; j+=1) {
      if (nums[i] == nums[j]) sum+=1;
    }
    return sum;
  }, 0)
}
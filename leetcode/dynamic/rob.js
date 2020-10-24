/**
 * 198. 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length;
    if (!len) return 0;
    let dp = new Array(len).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < len; i++) {
        let num = nums[i];
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + num);
    }
    return dp[len - 1];
};

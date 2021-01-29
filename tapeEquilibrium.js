// The Tape Equilibrium problem asks us to find the minimum difference between all the possible splits of an array (the left side minus the right side).
//
// It’s a fairly simple problem, we just need to pass once to initialize the minimum left slice (the first element) and to sum the maximum right slice (the sum of all the other elements in the array). At the second pass we compare each time the new difference and we keep the minimum in a variable.
//
// Thus the time complexity is O(n). Here is the solution:

function solution(A) {

    let left = A[0];
    let right = 0;
    for (let i = 1; i < A.length; i++){
        right += A[i]
    }
    let min = Math.abs(left - right);
    for (let i = 1; i < A.length-1; i++){
        left += A[i];
        right -= A[i];
        if (min > (Math.abs(left - right))) {
            min = Math.abs(left - right);
        }
    }
    return min;

}

console.log(solution( [1, 3, 6, 4, 1, 2]));

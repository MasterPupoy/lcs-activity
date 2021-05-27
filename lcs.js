// code was written and ran on node v16.0.0
// Thank you very much
// - Aryan

const longCommonSubsequence = (str1, str2) => {

    // create a 2D lcs array

    let dpMatrix = Array(str1.length+1).fill(0).map(() => Array(str2.length+1).fill(0))

    // storage array for the letters that match
    let commonSubsequence = []; 

    // iterate on the array horizontally and vertically 
    for(let i = 1; i < dpMatrix.length; i++) {
        for(let j = 1; j < dpMatrix[i].length; j++) {

            // Once matched, look diagonally to get the max subsequence before this letter and add one to proceed 
            if(str1[i-1]===str2[j-1]){
                dpMatrix[i][j] = dpMatrix[i-1][j-1] + 1;                       
                commonSubsequence.push(str2[j-1]);
            } else {
                // If there is no match, go back to the previous current longest subsequence
                // look for the max(higher values) of the two 
                dpMatrix[i][j] = Math.max(dpMatrix[i][j-1], dpMatrix[i-1][j])
            }
        }
    }        

    return commonSubsequence.join('');
};


console.log(`Longest common subsequence : ${longCommonSubsequence('abcd','abed')}`);
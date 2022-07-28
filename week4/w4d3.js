const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let resultStr = [];
    let alphaObj = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
    finalStr = "";

    for(i=0;i<s.length;i++) {
        if(alphaObj.hasOwnProperty(s[i])) {
            // console.log(s[i])
            // console.log(i)
            resultStr.push(i)
            // console.log(j)
        }

    }
    for(j=0;j<resultStr.length;j++) {
        alphaObj[s[resultStr[j]]] += Number(s.slice(resultStr[j]+1, resultStr[j+1]))
    }
    // console.log(alphaObj)
    for(const property in alphaObj) {
        if(Number(alphaObj[property]) > 0) {
            // console.log(`${property}: ${alphaObj[property]}`)
            finalStr += property;
            finalStr += alphaObj[property];
        }
    }

    return finalStr;
}

console.log(rehash(str1))
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isPermutation = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let map = new Map();

    // Step 1: Build frequency map for s
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // Step 2: Decrement using t
    for (let ch of t) {
        if (!map.has(ch)) {
            return false;
        }

        map.set(ch, map.get(ch) - 1);

        if (map.get(ch) < 0) {
            return false;
        }
    }

    return true;
};

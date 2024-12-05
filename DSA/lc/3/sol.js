/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if (s.length === 1) return 1;

    let longest = '';
    let temp = '';
    let occs = [] 
    
    var hash = (ch) => {return ch.charCodeAt(0) % 99}
    var add = (ch) => {index = hash(ch); occs[index] = ch;}
    var contains = (ch) => {return occs[hash(ch)] == ch}

    for (let i = 0; i < s.length; ++i)
    {
        if (contains(s[i]))
        {
            if (temp.length > longest.length)
            {
                longest = temp;
                temp = s[i]
                occs = [];
                add(s[i])
            }
            continue
        }
        console.log(occs)
        temp += s[i];
        add(s[i]);
    }

    return longest.length;
};




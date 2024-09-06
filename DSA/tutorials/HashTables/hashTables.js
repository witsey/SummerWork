// A Hash Set (implemented using an array):
hash_set = [null, null, null];

function hash_function(data /*string*/ ) 
{ 
    sum_of_chars = 0;
    for(let i = 0; i < data.length; ++i) 
    {
        sum_of_chars += data[i].codePointAt(0);
    }

    return sum_of_chars % hash_set.length;
};

function contains(data) {return hash_set[hash_function(data)] == data;} // a function that checks whether a specific data is in the hash set

let s = 'akram';

hash_set[hash_function(s)] = s;
console.log(contains(s));

hash_set2 = [[null], [null], [null]]; // a hash set that can handle collisions by implementing each bucket as a whole array

let m = 'kareem';
function add(data) 
{
    index = hash_function(data);
    bucket = hash_set2[index];

    if (bucket[0] === null) {bucket[0] = data; return;}
    hash_set2[hash_function(data)].push(data);
}

add(m);
console.log(hash_set2);

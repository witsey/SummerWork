class HashMap {
    constructor(size = 10) 
    {
        this.size = size;
        this.buckets = Array.from({length : size}, () => [])
    }

    hash_function(key) 
    { 
        let sum_of_digits = 0;
        for(let i = 0; i < key.length; ++i) 
        {
            if (!isNaN(parseInt(key[i]))) // sum only numeric characters
                sum_of_digits += key[i];
        }

        return sum_of_digits % this.size;
    }

    upsert(key, value) {     // a function that either add a new value to the hash map or update an existing one

        const index = this.hash_function(key); // get the hash code of the pair (by hashing the key)
        const bucket = this.buckets[index];    // get the correct bucket

        for(let i = 0; i < bucket.length; ++i)
        {
            let [k, v] = bucket[i];     // search the bucket
            if(k === key) {               // till you find the pair we are looking to update (if it exists)
                bucket[i] = [key, value]; // update it if so
                return;
            }
        }

        bucket.push([key, value]);   // add the pair to the map
    }

    get(key) {   // get a value by its key

        const index = this.hash_function(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; ++i) {
            let [k, v] = bucket[i]
            if (k === key)
                return v;
        }
        return null;
    }

    remove(key) { // remove a value by its key

        const index = this.hash_function(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; ++i) {
            let [k, v] = bucket[i]
            if (k === key) 
            {
                bucket.splice(i, 1);
                return;
            }
                
        }
        return "Pair not found";
    }

    printMap() {
        
        for(let i = 0; i < this.buckets.length; ++i) {
            console.log(`Bucket ${i + 1}: `, this.buckets[i])
        }
    }
}

const hashMap = new HashMap();
hashMap.upsert("43242", "value1");
hashMap.upsert("5345345", "value2");
hashMap.printMap();
console.log(hashMap.get("key1")); // Output: value1
hashMap.remove("43242");
hashMap.printMap();




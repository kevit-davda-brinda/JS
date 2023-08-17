/* 32 - Let's try to develop a program which calculate 
measure of central tendency of a sample(mean, median, mode) and 
measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile, and 
frequency distribution of the sample. You can create a class called 
Statistics and create all the functions which do statistical calculations 
as method for the Statistics class. Check the output below. 

nput:
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33,
     27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), 
(8.0, 37), (8.0, 34), 
(8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

// your output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), 
    (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), 
    (4.0, 29), (4.0, 25)]
*/


class Statistics {
    constructor(age) {
        this.age = age;
    }

    count() {
        return this.age.length;
    }

    sum() {
        let sum = 0;

        for (let i = 0; i < this.count(); i++) {
            sum += this.age[i];
        }

        return sum;
    }

    min() {
        let min = this.age[0];

        for (let i = 1; i < this.count(); i++) {
            if (min > this.age[i]) {
                min = this.age[i];
            }
        }

        return min;
    }

    max() {
        let max = this.age[0];

        for (let i = 1; i < this.count(); i++) {
            if (max < this.age[i]) {
                max = this.age[i];
            }
        }

        return max;
    }

    range() {
        return this.max() - this.min();
    }


    mean() {
        return Math.ceil(this.sum() / this.count());
    }

    median() {
        const n = this.count();

        if (n === 0) return;

        //1 - step sorting the array
        this.age.sort();

        //2 - if n is odd 
        if (n % 2 === 1) {
            return this.age[(n + 1) / 2 - 1];
        }

        //2 - if n is even
        return (this.age[(n / 2) - 1] + this.age[(n / 2)]) / 2;
    }

    frequencyCount(map){
        //counting frequency and put it in map
        for (var i = 0; i < this.count(); i++) {
            if (map.has(this.age[i])) {
                var k = map.get(this.age[i]);
                map.delete(this.age[i]);
                map.set(this.age[i], k + 1)
            }
            else {
                map.set(this.age[i], 1);
            }
        }

        return map;
    }

    mode() {
        let map = new Map() // map object created

        this.frequencyCount(map);

        //iterating the map
        let freq = 0, num = -1;this.frequencyCount(map);

        for (let [key, value] of map) {
            if (freq < value) {
                freq = value;
                num = key;
            }
        }

        return { 'mode': num, 'count': freq };
    }

    var() {
        //formula : Variance = ∑(arr[i] – mean)2 / n

        const n = this.count();
        let sum = 0;

        for (let i = 0; i < n; i++) {
            sum += Math.pow(this.age[i] - this.mean(), 2)/n
        }

        return sum
    }

    std() {
        return Math.sqrt(this.var())
    }

    freqDist(){

        let map = new Map() // map object created

        this.frequencyCount(map);

        let resultArraya = [];

        for(let i of map){
            resultArraya.push([i[1]*100/this.count(),i[0]])
        }

        return resultArraya;

    }

    describe() {

        return {
            "Count": this.count(),
            "Sum": this.sum(),
            "Min": this.min(),
            "Max": this.max(),
            "Range": this.range(),
            "Mean": this.mean(),
            "Median": this.median(),
            "Mode": this.mode(),
            "Variance": this.var().toFixed(1),
            "Standard Deviation": this.std(),
            "Frequency Distribution": this.freqDist()
        }
    }
}


let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33,
    27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages);

console.log(statistics.describe())
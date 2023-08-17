/* 33 - Write a function which cleans text.
 Clean the following text. After cleaning, count three most frequent words in the string.
Input:
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting 
&and& @emp%o@wering peo@ple. ;
I found tea@ching m%o@re interesting tha@n any other %jo@bs. 
%Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
Output
  [{word:'I', count:3}, {word:'teaching', count:2}, 
  {word:'teacher', count:2}] */


let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. 
There $is nothing; &as& mo@re rewarding as educa@ting 
&and& @emp%o@wering peo@ple. ;
I found tea@ching m%o@re interesting tha@n any other %jo@bs. 
%Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

// console.log(sentence.split(" "))

function cleanText(sentence) {
  sentence = sentence.replace(/[!@#$%^&*()|,;?.\n]/g, '')

  return sentence;
}



function mostFrequentWords(words) {
  const map = new Map();

  for(let i=0;i<words.length;i++){
    if(map.has(words[i])){
      map.set(words[i],map.get(words[i])+1);
    }
    else{
      map.set(words[i],1);
    }
  }

  const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  let array = Array.from(mapSort);

  array = array.sort((a, b) => a[0] - b[0]);

  return array;
}


console.log(cleanText(sentence).split(" "))

console.log(mostFrequentWords(cleanText(sentence).split(" ")))




const arr =[
    {
      "quote": "The journey of a thousand miles begins with one step.",
      "name": "Lao Tzu"
    },
    {
      "quote": "Happiness is when what you think, what you say, and what you do are in harmony.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "It is health that is real wealth and not pieces of gold and silver.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "The weak can never forgive. Forgiveness is the attribute of the strong.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "You don’t have to be great to start, but you have to start to be great.",
      "name": "Zig Ziglar"
    },
    {
      "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      "name": "Christian D. Larson"
    },
    {
      "quote": "A man is but the product of his thoughts. What he thinks, he becomes.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "Where there is love there is life.",
      "name": "Mahatma Gandhi"
    },
    {
      "quote": "First they ignore you, then they laugh at you, then they fight you, then you win.",
      "name": "Mahatma Gandhi"
    }
  ]
  

const text = document.getElementById('text');
const btn = document.querySelector('#btn');
const person = document.querySelector('.person');
btn.addEventListener('click',()=>{
    let r = Math.floor(Math.random()*arr.length);
    person.innerText = arr[r].name;
    text.innerText = arr[r].quote;
})
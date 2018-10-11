console.log('Yep i am here');

//1. make code run when user clicks button
const triggerElement = document.querySelector('[data-trigger]');
let index = 0;
const quotes = [
    {text: 'It ain\'t over till it\'s over', url:'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b88e73e1f9041d8bb5817761dae6ef1&auto=format&fit=crop&w=1050&q=80'},
    {text: 'When you come to a fork in the road, take it.', url:'https://images.unsplash.com/photo-1525423207238-e8f5315d87e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d1c63036a2a14c52809a3076d53a408&auto=format&fit=crop&w=1078&q=80'},
    {text: 'If you don\'t know where you are going, you\'ll end up someplace else.', url:'https://images.unsplash.com/photo-1524080578602-838ed6b52013?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c605832f3a7540c4411816cdac6a9f4a&auto=format&fit=crop&w=1051&q=80'},
    {text: 'It\'s like déjà vu all over again.', url:'https://images.unsplash.com/photo-1520246819288-8bcefb7ac966?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0861c0b1d9b9586d6b37a41b21b34145&auto=format&fit=crop&w=1050&q=80'},
    {text: 'You can observe a lot by just watching.', url:'https://images.unsplash.com/44/MIbCzcvxQdahamZSNQ26_12082014-IMG_3526.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=22b674fb2c751f77f7d80d22c77da67a&auto=format&fit=crop&w=1050&q=80'},
    {text: 'The future ain\'t what it used to be.', url:'https://images.unsplash.com/photo-1525869916826-972885c91c1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f7cce16b11befb3dc6ed56074727b7b6&auto=format&fit=crop&w=1050&q=80'},
    {text: 'In theory there is no difference between theory and practice. In practice there is.', url:'https://images.unsplash.com/photo-1457140072488-87e5ffde2d77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59ca8415c73573ea7208eed8df8e227e&auto=format&fit=crop&w=1050&q=80'},
    {text: 'Baseball is ninety percent mental and the other half is physical.', url:'https://images.unsplash.com/photo-1517431821893-b5fe4092f781?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d8a0621c95c4b315ca4ea77b57e12bba&auto=format&fit=crop&w=1050&q=80'},
    {text: 'No one goes there nowadays, it’s too crowded.', url:'https://images.unsplash.com/photo-1534423292-00e1ff92db6a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa3a58cf9ff62dc59c12289ae1f1315e&auto=format&fit=crop&w=1114&q=80'},
    {text: 'It\'s tough to make predictions, especially about the future', url:'https://images.unsplash.com/photo-1533859583213-c4e11b597ee0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b1c49ffa681cc6f955002395084fcdc&auto=format&fit=crop&w=1050&q=80'}
];



function hello() {
    console.log('Hello addEventListener!');
}
//addEventListener accepts 2 arguments;
//  - a string that identifies the kind of event to listen for
//  - a function that says what to do when the event happens      
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    let disQuote = quotes[index]['text'];
    let thisPicture = quotes[index]['url'];
    outputElement.textContent = disQuote;
    outputImage.src = thisPicture;
    index++;
    index > quotes.length -1 ? index = 0 : index;
});
//2. write text to page on button click
const outputElement = document.querySelector('[data-output]')
const outputImage = document.querySelector('[data-imageOutput]')
//3. pull text form array to write to page


//function to give random number in range of the given arrays length
function randomIndex(lengthOfGivenArray){
    return Math.round((Math.random() * (lengthOfGivenArray.length)));
}

// =======================
const secondTrigger = document.querySelector('[data-quoteTrigger]');
const secondOutput = document.querySelector('[data-quoteOutput]');
secondTrigger.addEventListener('click', function(){
    console.log(`Second Triggered quote`);
    let currentQuote = inspireQuotes[randomIndex(inspireQuotes)];

    secondOutput.textContent = currentQuote;
});


const inspireQuotes = [
    `Nothing is impossible, the word itself says “I’m possible”! —Audrey Hepburn`,
    `I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. —Maya Angelou`,
    `Whether you think you can or you think you can’t, you’re right. —Henry Ford`,
    `Perfection is not attainable, but if we chase perfection we can catch excellence. —Vince Lombardi`,
    `Life is 10% what happens to me and 90% of how I react to it. —Charles Swindoll`,
    `If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. —Oprah Winfrey`,
    `Remember no one can make you feel inferior without your consent. —Eleanor Roosevelt`,
    `I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. —Jimmy Dean`,
    `Believe you can and you’re halfway there. —Theodore Roosevelt`,
    `To handle yourself, use your head; to handle others, use your heart. —Eleanor Roosevelt`,
    `Too many of us are not living our dreams because we are living our fears. —Les Brown`,
    `Do or do not. There is no try. —Yoda`,
    `Whatever the mind of man can conceive and believe, it can achieve. —Napoleon Hill`,
    `Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. —Mark Twain`,
    `I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. —Michael Jordan`,
    `Strive not to be a success, but rather to be of value. —Albert Einstein`,
    `I am not a product of my circumstances. I am a product of my decisions. —Stephen Covey`,
    `When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. —Henry Ford`,
    `The most common way people give up their power is by thinking they don’t have any. —Alice Walker`,
    `The most difficult thing is the decision to act, the rest is merely tenacity. —Amelia Earhart`,
    `It is during our darkest moments that we must focus to see the light. —Aristotle Onassis`,
    `Don’t judge each day by the harvest you reap but by the seeds that you plant. —Robert Louis Stevenson`,
    `The only way to do great work is to love what you do. —Steve Jobs`,
    `Change your thoughts and you change your world. —Norman Vincent Peale`,
    `The question isn’t who is going to let me; it’s who is going to stop me. —Ayn Rand`,
    `If you hear a voice within you say "you cannot paint," then by all means paint and that voice will be silenced. —Vincent Van Gogh`,
    `Build your own dreams, or someone else will hire you to build theirs. —Farrah Gray`,
    `Remember that not getting what you want is sometimes a wonderful stroke of luck. —Dalai Lama`,
    `You can’t use up creativity. The more you use, the more you have. —Maya Angelou`,
    `I have learned over the years that when one’s mind is made up, this diminishes fear. —Rosa Parks`,
    `I would rather die of passion than of boredom. —Vincent van Gogh`,
    `A truly rich man is one whose children run into his arms when his hands are empty. —Unknown`,
    `A person who never made a mistake never tried anything new.——Albert Einstein`,
    `What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. —Bob Dylan`,
    `I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. —Leonardo da Vinci`,
    `If you want to lift yourself up, lift up someone else. —Booker T. Washington`,
    `Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless. —Jamie Paolinetti`,
    `If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. —Sheryl Sandberg`,
    `Certain things catch your eye, but pursue only those that capture the heart. —Ancient Indian Proverb`,
    `When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. —Helen Keller`,
    `Everything has beauty, but not everyone can see. —Confucius`,
    `How wonderful it is that nobody need wait a single moment before starting to improve the world. —Anne Frank`,
    `When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down “happy”. They told me I didn’t understand the assignment, and I told them they didn’t understand life. —John Lennon`,
    `The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson`,
    `We can’t help everyone, but everyone can help someone. —Ronald Reagan`,
    `Everything you’ve ever wanted is on the other side of fear. —George Addair`,
    `We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light. —Plato`,
    `Nothing will work unless you do. —Maya Angelou`,
    `I alone cannot change the world, but I can cast a stone across the water to create many ripples. —Mother Teresa`,
    `What we achieve inwardly will change outer reality. —Plutarch`
    ]
    

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweets-container').empty();

    for( let tweet of tweets){

      const $tweet = createTweetElement(tweet);


    $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }


  const createTweetElement = function(tweet){
    const user = tweet.user;
    const content = tweet.content;
    const days = timeAgo(tweet.created_at);
    const template = `
    <article class='tweet'>
          <header>
            <div class = "tweet-profile">
              <img class = "avatar-pic" src=${user.avatars} > 
              <p>${user.name}<p>
            </div>
            <p class='handle'>${user.handle}</p>
          </header>
          <p>${content.text}</p>
          <footer>
            <p class='date'>${days} days ago</p>
            <div>
              <img class = "footer-icons" src="/images/flag.png" > 
              <img class = "footer-icons" src="/images/retweet.png" > 
              <img class = "footer-icons" src="/images/heart.png" > 
            </div>
          </footer>
        </article>
    `;

    return template;


  }

  const timeAgo = function(dateTime){
    

    const now = new Date();
    const time = new Date(dateTime);
    const diff = now - time;
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  const loadTweets = function(){
    $.ajax('/tweets', { method: 'GET'})
    .done(
      function(data){
        console.log(data);
        renderTweets(data);
        
      }
    )
  

  }






// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]



  $("#tweet-form").submit(function(event){
    event.preventDefault();
    const text = $(this).serialize();
    console.log('tweet: ', text);
    $.ajax('/tweets', { method: 'POST', data: text}).
    done(function(){
      loadTweets();
    })
    .catch(function(err){
      console.log("ERROR: ", err);
    })
    
  });


//const tweets = 
//console.log(loadTweets());
//renderTweets(tweets);
loadTweets();

});



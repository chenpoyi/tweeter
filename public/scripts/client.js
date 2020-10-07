/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
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
    console.log('NOW: ', new Date().toString());
    console.log('Time: ', new Date(dateTime).toString());

    const now = new Date();
    const time = new Date(dateTime);
    const diff = now - time;
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  }







// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

timeAgo(tweetData.created_at);


});



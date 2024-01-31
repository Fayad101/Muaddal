function toggleTable() {
  var table4x4 = document.getElementById('table-4x4');
  var table2x3 = document.getElementById('table-2x3');

  if (table4x4.style.display === 'none') {
      table4x4.style.display = 'block';
      table2x3.style.display = 'none';
  } else {
      table4x4.style.display = 'none';
      table2x3.style.display = 'block';
  }
}
// Replace these values with your Twitter API credentials
const apiKey = 'DtP0td7FA5DlTm0tePkN5HSy4';
const apiSecretKey = 'd4QSXmZXC7ujr71G19DcllKu6hZ0hQc2cEojBqj3Y2A5vgRJKT';
const accessToken = '1752619267516739584-CHaMughGdSn1aXoVF4fsYpGoeV4sGy';
const accessTokenSecret = 'myj3vbQWBmA6rpLulnFElrUrBstrcQDtAk5HBYInxIKaL';
const screenName = 'https://api.twitter.com/2/tweets?screen_name=MOE_RYH_07_1461&count=2'; 

const tweetCount = 2; // change the number of tweets to fetch

// Function to fetch tweets from Twitter API
async function getTweets() {
    const response = await fetch(`/api/tweets?screen_name=${screenName}&count=${tweetCount}`);
    const data = await response.json();
    return data;
}

// Function to display tweets on the page
function displayTweets(tweets) {
    const tweetsContainer = document.getElementById('tweets-container');
    tweetsContainer.innerHTML = '';

    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `<p>${tweet.text}</p><small>${tweet.created_at}</small>`;
        tweetsContainer.appendChild(tweetElement);
    });
}

// Fetch and display tweets when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const tweets = await getTweets();
        displayTweets(tweets);
    } catch (error) {
        console.error('Error fetching tweets:', error);
    }
});


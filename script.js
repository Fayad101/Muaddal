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
const apiKey = 'i1NhBsXhnEGNhzUGwitL2VLuE';
const apiSecretKey = '5mRBhRXr3ao2pGOQUmsfB8N3jWuWtHgLG22oatxBUSbCFFUaQ4';
const accessToken = '1752619267516739584-FXMX2s8bBNBDeC4E4uq0FcKxJVtGfM';
const accessTokenSecret = 'hsUXAwpBuWhJnmENvNjFA2dhiy7JZxIScu7s3JccHDkk1';
const screenName = 'MOE_RYH_07_1461'; 

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


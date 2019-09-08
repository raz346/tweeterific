$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
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
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];
  function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $avatar = $("<img>").addClass("avatar").attr("src", tweetData.user.avatars.small);
    var $fullname = $("<h3>").addClass("fullname").text(tweetData.user.name);
    var $username = $("<p>").addClass("username").text(tweetData.user.handle);
    var $contents = $("<p>").addClass("contents").text(tweetData.content.text);
    var $footer = $("<footer>");
    var date = new Date(tweetData.created_at);
    var $date = $("<p>").addClass("date").text(date);

    // append elements
    $header.append($avatar, $fullname, $username);
    $footer.append($date);
    $tweet.append($header, $contents, $footer);
    return $tweet;
  }
  
  function renderTweetElement (tweets) {
    tweets.forEach(function(tweet) {
      $("#tweets-container").append(createTweetElement(tweet));
    });
  }
  renderTweetElement(data);
});
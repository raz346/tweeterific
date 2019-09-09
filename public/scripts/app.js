$(function() {
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
  
  // loading tweets from db
  function loadTweets () {
    $.ajax({
      type: "get",
      url: "/tweets",
    }).then(function (tweets) {
      renderTweetElement(tweets);
    })
  }

  var $button = $(".new-tweet form");
  $button.on("submit", function (event) {
    event.preventDefault();
    var charCount = $(".new-tweet textarea").val().length;
    if (charCount === 0 ) {
      alert("please enter a tweet");
      return;
    } else if (charCount > 140) {
      alert("your tweet is too long");
      return;
    } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        
        success: function (response) {
          
        }
      });
    }
  })
loadTweets();
});
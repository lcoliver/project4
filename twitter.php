

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<script src="js/tweetLinkIt.js"></script>

<script>
        
        function pageComplete(){
            console.log("pageComplete");
           $('.text').tweetLinkify();
    }
</script>

<style type="text/css">
p{
    font-family: ginkgo;
    color: #2b2b2d;
    font-size: 1.1em;
    padding-bottom: 1px;
}

img{
padding-right: 5px;        
}

a:link {
    color: #b51515;
    text-decoration: none;
}

a:hover {
    color: white;
}

a:visited {
    color: #b51515;
    text-decoration: none;
}

.text{
margin-top: 0px;
}

@font-face {
    font-family: oldpressit;
    src: url(fonts/OldPressItalic.ttf);
}

@font-face {
    font-family: ginkgo;
    src: url(fonts/Ginkgo.otf);
}

h2{
    font-family: oldpressit;
    font-size: 2.5em;
    color: #b51515;
    margin-bottom: 2px;
}

</style>

<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "54407100-lkHGO6quE9KoUxpFqIFdldI3zjqeM7lKX16iKd5EA",
    'oauth_access_token_secret' => "ETTHacjDNXMCAcwmwOPMiondlwEYRUGKZxMTtIBT6ghML",
    'consumer_key' => "mQu6UKwiyc1zr1hT5lrdnDpiV",
    'consumer_secret' => "Dh9EIZlgizgCqDLZDp30jnqobuRRh8AwMcjjRFT9vOAQete6v5"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';
$getfield="?q=wrugby";

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock', 
    'skip_status' => '1'
);


$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc = TRUE);
             

echo "<h2>" . "Twitter #wrugby" . "</h2>";

foreach($string['statuses'] as $items)
{ 
    echo "<div id='tweet'>" . "<img style='float: left' src='" . $items['user']['profile_image_url'] . "'>" . "<p class='text'>" . $items['user']['name'] . ": " . $items['text'] . "</p>" . "<hr>" . "</div>";
    
}
echo "<script>pageComplete();</script>";

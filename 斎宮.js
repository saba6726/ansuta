'use strict';
const tweetDivision = document.getElementById('tweet-area');
// ツイートエリアの作成
tweetDivision.innerText = '';
const anchor = document.createElement('a');
const hrefValue =
'https://twitter.com/intent/tweet?button_hashtag=斎宮宗&ref_src=twsrc%5Etfw';

anchor.setAttribute('href',hrefValue);
anchor.setAttribute('class','twitter-hashtag-button');

anchor.innerText = 'tweet #斎宮宗';

tweetDivision.appendChild(anchor);

const script = document.createElement('script');
script.setAttribute('src','https://platform.twitter.com/widgets.js');
tweetDivision.appendChild(script);

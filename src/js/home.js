var users = {
  github: 'olls',
  twitter: 'olls96'
}

var github = document.getElementById('github-widget')
github_widget(users.github, github);

var twitter = document.getElementById('twitter-widget')
twitter_widget(users.twitter, twitter);

twitter_tagline(users.twitter, document.getElementById('bio'));

export function signinLogin(user){
  return {
    type: 'SIGNIN_LOGIN',
    payload: user
  }
}

export function tweetAdd(tweet){
  return {
    type: 'TWEET_ADD',
    payload: tweet
  }
}

export function tweetList(){
  return {
    type: 'TWEET_LIST'
  }
}
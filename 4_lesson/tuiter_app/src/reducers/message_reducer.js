
const INITIAL_STATE = { newTweet: null, tweetList: ["first message"] };

let tweetList = [];

export default function(state = INITIAL_STATE, action){
    switch(action.type) {
        case 'TWEET_ADD':    
            return {
                ...state,
                tweetList: state.tweetList.concat(action.payload)
            }
        case 'TWEET_LIST':
            return {
                ...state,
                tweetList: state.tweetList                
            }
    }

    return state;
}

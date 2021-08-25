import { Timeline, Tweet } from 'react-twitter-widgets'

export default function TwitterFeed() {

    return (
        <div>
        // Tweet (without options)
        <Tweet tweetId="841418541026877441" />

        // Timeline (with options)
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'TwitterDev'
          }}
          options={{
            height: '400'
          }}
        />
        </div>
    )
}


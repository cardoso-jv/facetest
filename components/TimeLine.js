import React, { Component } from 'react';
import Posts from './Posts';

class TimeLine extends Component {

  state = {
    posts: [
      {
        id: '1',
        profile_name: 'Julio Boye',
        profile_pic: 'https://i.pravatar.cc/300?img=70',
        date: '11 Jan 2020',
        content: "Tyson Steele survived for 23 days in subzero temperatures in rural Alaska after a fire burned his house and killed his dog. He built himself a snow cave to sleep in for the first few nights, before building a makeshift shelter around the still burning stove from leftover tarp and scrap timber",
        comments: [
          {
            profile_name: 'Leonard Jemison',
            profile_pic: 'https://i.pravatar.cc/300?img=12',
            comment: "Legend has it they're still circling him watching him wave to this day",
          },
          {
            profile_name: 'Brigida Kinsel',
            profile_pic: 'https://i.pravatar.cc/300?img=48',
            comment: "It's a waiting game. He needs wood for the stove, helicopter needs less trees to land. The universe is in balance."
          },
        ],
      },
      {
        id: '2',
        profile_name: 'Bob Bohan',
        profile_pic: 'https://i.pravatar.cc/300?img=8',
        date: '12 Jan 2020',
        content: "Special Smash Broadcast announced",
        comments: [
          {
            profile_name: 'Lorene Ringwood',
            profile_pic: 'https://i.pravatar.cc/300?img=16',
            comment: "9am Eastern on Thursday. Might have to call in sick to work.",
          },
          {
            profile_name: 'Jerome Kammer',
            profile_pic: 'https://i.pravatar.cc/300?img=64',
            comment: "I have a math test"
          },
          {
            profile_name: 'Lorene Ringwood',
            profile_pic: 'https://i.pravatar.cc/30?img=16',
            comment: "Now you have a Smash test"
          },
        ],
      },
    ]
  }


  render() {
    const { posts } = this.state;
    return (
      <>
        <div className="container">
          <div className="timeline">
            {posts.map(post => (
              <Posts key={post.id} {...post} />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default TimeLine;
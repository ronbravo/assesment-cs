import axios from 'axios';
import { UserPost } from '@/components/user/UserPost';
import { USER_FEED_LIST } from './sample-data.js';

export function UserFeed () {
  let data;
  data = USER_FEED_LIST;
  
  return (
    <div className="user-feed">
    {data.map ((post, index) => {
      return (<UserPost post={post} />)
    })}
    </div>
  );
}

          

          
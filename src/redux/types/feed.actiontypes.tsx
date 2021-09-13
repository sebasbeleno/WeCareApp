import {PostInterface} from './feed.types';

export const UPDATE_FEED = 'UPDATE_FEED';
export const LIKE_POST = 'LIKE_POST';

interface UpdateFeedAction {
  type: typeof UPDATE_FEED;
  payload: PostInterface[];
}

interface LikePostAction {
  type: typeof LIKE_POST;
  payload: PostInterface[];
}

export type FeedActionTypes = UpdateFeedAction | LikePostAction;

export interface UserInterface {
  id: String;
  username: String;
}

export interface PostInterface {
  id: string;
  user: UserInterface;
  captopn: string;
}

export interface FeedState {
  post: PostInterface[];
}

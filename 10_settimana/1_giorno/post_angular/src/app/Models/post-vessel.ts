import { iPost } from './post';
export interface iPostVessel {

  posts: iPost[];

  total: number;

  skip: number;

  limit: number;

}

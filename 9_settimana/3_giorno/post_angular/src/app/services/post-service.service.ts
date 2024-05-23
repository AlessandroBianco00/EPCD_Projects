import { Injectable } from '@angular/core';
import { iPostVessel } from '../Models/post-vessel';
import { iPost } from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  urlJson:string = '../../../assets/db.json'

  constructor() {
  }

  shuffleArray(array:any[]) {
    for (let i = array.length - 1; i > 0; i--) {
     let j = Math.floor(Math.random() * (i + 1));
     [array[i], array[j]] = [array[j], array[i]];
   }
 }

  /*async getAllPosts():Promise<void>   {
    let response = await fetch(this.urlJson)
    let object = <iPostVessel> await response.json()

    this.postsArrayComplete = object.posts
  }*/

  getFromJson():Promise<Response>{
    return fetch(this.urlJson)
  }

  getActivePosts(array:iPost[]):iPost[] {
    return array.filter(post => post.active == true)
  }

  getInactivePosts(array:iPost[]):iPost[] {
    return array.filter(post => post.active === false)
  }

  getPostById(id:number, array:iPost[]){
    return array.find(p => p.id == id)
  }
}

/* SHUFFLE FISHER-YATES FUNZIONA CORRETTAMENTE
function shuffleArray(array:any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}*/

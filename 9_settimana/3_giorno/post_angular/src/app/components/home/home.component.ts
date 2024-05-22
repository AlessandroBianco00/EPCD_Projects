import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iPostVessel } from '../../Models/post-vessel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  urlJson:string = '../../../assets/db.json'

  arrayPost:iPost[] = []
  arrayPool:number[] =[]
  arrayEstrazione:iPost[] =[]

  ngOnInit() {
    this.getPosts()
  }

  shuffleArray(array:any[]) {
     for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getRandomPosts():void {
    let postPool = this.arrayPost.length
    let numeroPostEstratti:number = 4
    for (let i=0 ; i < postPool; i++ ) {
      this.arrayPool.push(i)
    }

    this.shuffleArray(this.arrayPool)

    for (let j=0; j < numeroPostEstratti ; j++) {
      let postEstratto = this.arrayPool.pop()
      if(postEstratto) this.arrayEstrazione.push(this.arrayPost[postEstratto])
    }
    console.log(this.arrayEstrazione)
  }

  async getPosts():Promise<void>   {
    let response = await fetch(this.urlJson)
    let object = <iPostVessel> await response.json()

    this.arrayPost = object.posts

    this.getRandomPosts()
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

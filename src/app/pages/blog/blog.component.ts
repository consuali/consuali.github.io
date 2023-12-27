import { Component, OnInit } from '@angular/core';
import { loremIpsum } from "lorem-ipsum";
interface Post {
  title: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: Post[] = [];
  loremText: string;

  constructor() {


    this.loremText = loremIpsum({
      count: 10,                // Number of "words", "sentences", or "paragraphs"
      format: "plain",         // "plain" or "html"
      paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
      paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
      random: Math.random,     // A PRNG function
      sentenceLowerBound: 5,   // Min. number of words per sentence.
      sentenceUpperBound: 15,  // Max. number of words per sentence.
      suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
      units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"

    })

    this.posts = [{ title: 'Project Plan for Reactivity/Signals', content: 'The Angular team published the project plan for the Signals/Reactivity roadmap, where we can see what tasks they are currently working on and more.' }]
  }
  currentPost: Post = { title: '', content: '' };

  addPost() {
    this.posts.push({ ...this.currentPost });
    this.currentPost.title = '';
    this.currentPost.content = '';
  }

  editPost(index: number) {
    this.currentPost = { ...this.posts[index] };
    this.deletePost(index);
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}
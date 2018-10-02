import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor(){
    this.articles=[
       new Article('Angular 2', 'http://angular.io', 3),
       new Article('Fullstack', 'http://fullstack.io', 2),
       new Article('StackOverflow', 'http://stackoverflow.com', 1),
      ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if(title.value!='' && link.value !=''){
      console.log(`Adding article title: ${title.value} and link: ${link.value}`);
      this.articles.push(new Article(title.value,link.value,0));
    }
    else{
      console.log('Error:Empty values are not allowed.Please add Title and Link');
    }
    title.value='';
    link.value='';
    return false;
   }
   sortedarticles():Article[]{
     return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
   }
}




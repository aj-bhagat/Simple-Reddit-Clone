import { Component, OnInit,Input } from '@angular/core';
import {HostBinding} from '@angular/core';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';
import {Article} from '../article/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  voteup():boolean {
    this.article.voteup();
    return false;
  }

  votedown():boolean {
    this.article.votedown();
    return false;
  }
  ngOnInit() {
  }
}

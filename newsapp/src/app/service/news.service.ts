import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = 'eb3e45d4f56440c68ef3a48bb909b28a';

  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
        this.api_key
    );
  }
  getArticlesByid(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}

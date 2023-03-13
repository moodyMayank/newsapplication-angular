import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // This API KEY can only be used in localHost because API provider only allow it to work on localhost
  api_key = 'eb3e45d4f56440c68ef3a48bb909b28a';

  constructor(private http: HttpClient) {}
  // To use actual API , run the project in localhost and comment other returns

  initSources() {
    // return this.http.get(
    //   'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    // );
    return this.http.get('https://api.npoint.io/822adb5bcf997e7be6f4');
  }

  initArticles() {
    // return this.http.get(
    //   'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
    //     this.api_key
    // );

    return this.http.get('https://api.npoint.io/91443291a9b4915c6175');
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

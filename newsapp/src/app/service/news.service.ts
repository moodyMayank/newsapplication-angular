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

  // Commented the API , because it its cors is blocked and it only works on localhost

  getArticlesByid(source: string) {
    // return this.http.get(
    //   'https://newsapi.org/v2/top-headlines?sources=' +
    //     source +
    //     '&apiKey=' +
    //     this.api_key
    // );

    let apiCall: string = '';
    switch (source) {
      case 'abc-news':
        apiCall = 'https://api.npoint.io/c30a68b1eb1706bdf7e4';
        break;
      case 'abc-news-au':
        apiCall = 'https://api.npoint.io/df076e6ccc86eb49e11d';
        break;
      case 'al-jazeera-english':
        apiCall = 'https://api.npoint.io/d3ec52ae91bf63d8ea7c';
        break;
      case 'bbc-news':
        apiCall = 'https://api.npoint.io/f20767c6c66e1dae4ee8';
        break;
      case 'bbc-sport':
        apiCall = 'https://api.npoint.io/df9af10a95c33abfb28d';
        break;
      case 'bleacher-report':
        apiCall = 'https://api.npoint.io/49abdd0dda651e889f57';
        break;
      default:
        apiCall = 'https://api.npoint.io/91443291a9b4915c6175';
    }

    return this.http.get(apiCall);
  }
}

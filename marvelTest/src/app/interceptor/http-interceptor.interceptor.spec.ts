import { TestBed } from '@angular/core/testing';

import { HttpMarvelInterceptor as HttpMarvelInterceptor } from './http-interceptor.interceptor';

describe('HttpMarvelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpMarvelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpMarvelInterceptor = TestBed.inject(HttpMarvelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import { TrailAppPage } from './app.po';

describe('trail-app App', function() {
  let page: TrailAppPage;

  beforeEach(() => {
    page = new TrailAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

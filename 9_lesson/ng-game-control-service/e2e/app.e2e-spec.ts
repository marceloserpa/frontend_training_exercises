import { NgGameControlServicePage } from './app.po';

describe('ng-game-control-service App', () => {
  let page: NgGameControlServicePage;

  beforeEach(() => {
    page = new NgGameControlServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

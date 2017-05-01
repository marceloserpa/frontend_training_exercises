import { NgGameControlPage } from './app.po';

describe('ng-game-control App', () => {
  let page: NgGameControlPage;

  beforeEach(() => {
    page = new NgGameControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

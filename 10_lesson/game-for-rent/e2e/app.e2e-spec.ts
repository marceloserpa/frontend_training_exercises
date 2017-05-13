import { GameForRentPage } from './app.po';

describe('game-for-rent App', () => {
  let page: GameForRentPage;

  beforeEach(() => {
    page = new GameForRentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

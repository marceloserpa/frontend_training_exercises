import { Ng2PobretubePage } from './app.po';

describe('ng2-pobretube App', () => {
  let page: Ng2PobretubePage;

  beforeEach(() => {
    page = new Ng2PobretubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

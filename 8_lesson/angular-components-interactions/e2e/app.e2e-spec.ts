import { AngularComponentsInteractionsPage } from './app.po';

describe('angular-components-interactions App', () => {
  let page: AngularComponentsInteractionsPage;

  beforeEach(() => {
    page = new AngularComponentsInteractionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

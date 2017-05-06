import { AngularComponentsInteractionsServicePage } from './app.po';

describe('angular-components-interactions-service App', () => {
  let page: AngularComponentsInteractionsServicePage;

  beforeEach(() => {
    page = new AngularComponentsInteractionsServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

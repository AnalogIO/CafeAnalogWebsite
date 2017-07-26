import { CafeanalogPage } from './app.po';

describe('cafeanalog App', () => {
  let page: CafeanalogPage;

  beforeEach(() => {
    page = new CafeanalogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

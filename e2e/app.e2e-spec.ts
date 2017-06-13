import { AngularBasicRoutingPage } from './app.po';

describe('angular-basic-routing App', () => {
  let page: AngularBasicRoutingPage;

  beforeEach(() => {
    page = new AngularBasicRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

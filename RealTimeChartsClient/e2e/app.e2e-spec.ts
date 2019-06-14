import { RealTimeChartsClientPage } from './app.po';

describe('real-time-charts-client App', function() {
  let page: RealTimeChartsClientPage;

  beforeEach(() => {
    page = new RealTimeChartsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

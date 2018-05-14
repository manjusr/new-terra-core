/* global browser, Terra, before */

describe('Toggle', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/toggle/default-toggle'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('closed');

    it('expands', () => {
      browser.click('#trigger-toggle'); // Open toggle
    });

    Terra.should.matchScreenshot('opened');
  });

  describe('Opened', () => {
    beforeEach(() => browser.url('/#/raw/tests/toggle/open-toggle'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Animated', () => {
    beforeEach(() => browser.url('/#/raw/tests/toggle/animated-toggle'));

    it('disables focusable elements when closed', () => {
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('hidden');
    });

    it('enables focusable elements when opened', () => {
      browser.click('#trigger-toggle'); // Open toggle
      browser.waitForVisible('#toggle', 1000);
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('visible');
    });
  });
});
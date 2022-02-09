'use strict';

describe('The Home Page', function() {
  it('should have an expected title', function(browser) {
    browser.url(`${browser.launchUrl}`)
      .assert.titleEquals('Sign In to WidgetCo, Inc.')
      .end();
  });
});

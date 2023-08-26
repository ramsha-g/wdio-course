describe('IFrame', () => {
  it('Working with iFrame', async () => {
    // Open URL
    await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

    // Access the iframe
    const iframe = await $('#advanced_iframe');
    await browser.switchToFrame(iframe);

    //verify logo exists
    await expect ($('.hfe-site-logo')).toExist();
    
    //switch to parent frame
    await browser.switchToParentFrame();

    //verify page title
    await expect ($('.zak-page-header__title')).toHaveText('IFrame Sample')
  })
});
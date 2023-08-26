import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';


describe('Home', () => {
  it('Open URL & assert title', async () => {
    // Open URL
    //await browser.url('https://practice.automationbro.com/');
    await HomePage.open();

    // Assert title
    await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
  });
  
  it('Open About Page & assert URL', async () => {
    allureReporter.addSeverity("minor");

    // Open About Page
    await browser.url('https://practice.sdetunicorns.com/about/');

    // Assert URL
    await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
  });

  it('Click get started btn & assert url contains get-started text', async () => {
    // Open Home Page
    await HomePage.open();
    //await browser.url('https://practice.automationbro.com');

    // Click get started button
   // await $('#get-started').click();
   await HomePage.btnGetStarted.click();

    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining('get-started');
  });

  it('Click logo & assert url DOES NOT contains get-started text', async () => {
    allureReporter.addFeature("Logo Verification");

   
    // Open Home Page
    await browser.url('https://practice.automationbro.com');

    // Click logo
  //  await $('//img[@alt="Practice E-Commerce Site"]').click();
  await HomePage.imageLogo.click();

    // Assert url does not contains get-started text
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it('Find heading element & assert the text', async () => {
    // Open Home Page
    await browser.url('https://practice.automationbro.com');

    // find heading element
    //const headingEl = await $('.elementor-widget-container h1');
    const headingEl = await HomePage.txtHeading;


    // get the text
    const headingText = await headingEl.getText();

    // Assert the text
    await expect(headingText).toEqual('Think different. Make different.'); // Jest library
    // await expect(headingEl).toHaveText('Think different. Make different!'); // wdio expect assertion
  });
});

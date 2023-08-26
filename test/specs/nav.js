import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
  it('Get the text of all menu items & assert them', async () => {
  //  await browser.url('/');

  allureReporter.addFeature("Navigation");
  allureReporter.addSeverity("critical");

    await HomePage.open();


    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

   //  const navLinks = await $('#primary-menu').$$('li[id*=menu]');
   // const navLinks = await $$('#zak-primary-menu li[id*=menu]');
   const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });

  it.only('Get the text of all menu items & assert them - using wait commands', async () => {
    // hardcoded timeout
    // browser.pause(1000);

    //browser.url('/');
    await HomePage.open();

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    const actualLinks = [];

    // await $('#primary-menu .menu-item.tg-header-button-wrap').waitForDisplayed({ timeout: 2000 });

    // wait until the Home text is displayed on the navigation menu
    await browser.waitUntil(async function () {
      const homeText = await HomePage.NavComponent.firstNavMenuList.getText(); // Home
      return homeText === "Home"; // true | false
    }, {
      timeout: 5000,
      timeoutMsg: 'Could not verify the Home text from #primary-menu li'
    });

    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {
      actualLinks.push(await link.getText());
    }

    await expect(actualLinks).toEqual(expectedLinks);
  });
});
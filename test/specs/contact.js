import ContactPage from '../pages/contact-page';

describe('contact', () => {
  it('Open URL & assert title', async () => {
    // Open URL
   // await browser.url('/contact');
    await ContactPage.open();

    // Fill out the input fields & click submit
    // await $('.contact-name input').addValue('Test Name');
    // await $('.contact-email input').addValue('test@mail.com');
    // await $('.contact-phone input').addValue('123456789');
    // await $('.contact-message textarea').addValue('This is a test message');
    // await $('button[type=submit]').click();

   await ContactPage.submitForm('Test Name', 'test@gmail.com', '+12343898', 'hello');


    const successAlert = $("[role='alert']");
    await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');

  });
});
/* eslint-disable no-undef */
describe('Gifs', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have searchBar', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
    await expect(element(by.id('randomGif'))).toBeVisible();
  });

  it('should have gifGrid after taping in searchBar', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
    await element(by.id('searchBar')).typeText('Picnic');
    await waitFor(element(by.id('gifGrid'))).toBeVisible();
  });
});

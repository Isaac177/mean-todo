import { browser, by, element } from 'protractor';

describe('HomeComponent', () => {
  beforeEach(() => {
    // Navigate to the home page before each test
    browser.get('/home');
  });

  it('should display the correct title', () => {
    // Check that the title is correct
    expect(browser.getTitle()).toEqual('Organise all your tasks');
  });

  it('should display a get started button when not logged in', () => {
    // Check that the get started button is displayed when not logged in
    expect(element(by.css('button[routerLink="/register"]')).isPresent()).toBe(true);
  });

  it('should display an organize your work button when logged in', () => {
    // This test would require you to log in first, which is not shown here
    // Check that the organize your work button is displayed when logged in
    expect(element(by.css('button[routerLink="/list"]')).isPresent()).toBe(true);
  });
});

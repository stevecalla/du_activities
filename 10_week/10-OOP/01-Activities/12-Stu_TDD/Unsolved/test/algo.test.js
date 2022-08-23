const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it('expect string to match the reverse of itself', () => {
      let a = new Algo()
      expect(a.reverse("Hello World!")).toBe('!dlroW olleH');
    });

  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it('expect true if the string is a palindrome', () => {
      let a = new Algo()
      expect(a.isPalindrome("racecar")).toBe(true);
      expect(a.isPalindrome("neon")).toBe(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it('expect a new string with first letter of each word capitalized', () => {
      let a = new Algo()
      expect(a.capitalize("capitalize every first word of the string.")).toBe("Capitalize Every First Word Of The String.");
    });
  });
});

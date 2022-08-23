const FileIO = require('../fileIO');
const fs = require('fs'); //section add

jest.mock("fs") //section add

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
      const fileIO = new FileIO();

      // fs.mockReturnValue('');
      // fs.readFileSync.mockResolvedValue(JSON.stringify({"some" : "data"}));
      fs.readFileSync.mockResolvedValue('');

      expect(fileIO.read("message.txt")).resolves.toEqual('');

    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
      const fileIO = new FileIO();

      fs.writeFileSync.mockResolvedValue('');

      expect(fileIO.write("message.text", '')).resolves.toEqual('');
    });
  });
});

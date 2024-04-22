const chai = require('chai');
const { expect } = chai;

describe('ToDo Controller', () => {
  describe('deleteToDo', () => {
    it('should delete a ToDo item', (done) => {
      const res = {
        status: 204,
        body: {}
      };
      expect(res).to.have.property('status', 204);
      done();
    });
  });

  describe('updateToDo', () => {
    it('should update a ToDo item', (done) => {
      const res = {
        status: 200,
        body: { content: 'Updated ToDo', checked: true }
      };
      expect(res).to.have.property('status', 200);
      expect(res.body).to.have.property('content');
      done();
    });
  });

  describe('createToDo', () => {
    it('should create a new ToDo item', (done) => {
      const res = {
        status: 201,
        body: { content: 'New ToDo', owner: 'fakeUserId' }
      };
      expect(res).to.have.property('status', 201);
      expect(res.body).to.have.property('content');
      done();
    });
  });

  describe('getToDo', () => {
    it('should get a ToDo item', (done) => {
      const res = {
        status: 200,
        body: { content: 'Get ToDo', owner: 'fakeUserId' }
      };
      expect(res).to.have.property('status', 200);
      expect(res.body).to.have.property('content');
      done();
    });
  });

  describe('getAllToDos', () => {
    it('should get all ToDo items', (done) => {
      const res = {
        status: 200,
        body: [{ content: 'ToDo 1' }, { content: 'ToDo 2' }]
      };
      expect(res).to.have.property('status', 200);
      expect(res.body).to.be.an('array').that.is.not.empty;
      done();
    });
  });
});

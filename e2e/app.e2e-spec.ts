import { ElTodoNgPage } from './app.po';

describe('el-todo-ng App', function() {
  let page: ElTodoNgPage;

  beforeEach(() => {
    page = new ElTodoNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

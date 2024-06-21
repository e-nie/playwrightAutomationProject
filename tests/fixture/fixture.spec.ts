import { expect, test } from './todo-page'


test('fixture test', async ({ page, todoPage }) => {
    await todoPage.addTodoItem('spec fixture test')
    expect(page.getByTestId('todo-title')).toContainText(['spec fixture test'])
})

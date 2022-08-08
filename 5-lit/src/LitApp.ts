import { html, LitElement } from 'lit'

export class LitApp extends LitElement {
  todos: string[] = []
  todoText:string = ''

  connectedCallback() {
    super.connectedCallback()
    const existingTodos = localStorage.getItem('todos')
    this.todos = JSON.parse(existingTodos!) || []
  }

  addTodo(event: Event) {
    this.todos = [this.todoText, ...this.todos]
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  render() {
    return html`

    <ul>
      ${this.todos.map(todo => html`<li>${todo}</li>`)}
    </ul>

    <form @submit="${this.addTodo}">
      <input type="text" value="${this.todoText}" @change=${(e: any) => this.todoText = e.target.value} />
      <input type="submit" value="Add todo"/>
    </form>

    `
  }
}

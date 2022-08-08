import { Component, h, State } from '@stencil/core'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() todoText = ''
  @State() todos = []

  componentWillLoad() {
    const existingTodos = localStorage.getItem('todos')
    this.todos = JSON.parse(existingTodos as string) || []
  }

  private addTodo(event) {
    event.preventDefault()
    this.todos = [this.todoText, ...this.todos]
    localStorage.setItem('todos', JSON.stringify(this.todos))
    this.todoText = ''
  }

  render() {
    return (
      <div>
        <ul>
          {this.todos.map(todo => (<li key={Math.random()}>{todo}</li>))}
        </ul>

        <form onSubmit={(e) => this.addTodo(e)}>
          <input name='mainInput' value={this.todoText} onChange={(e: any) => this.todoText = e.target.value} />
          <input type="submit" value="Add Todo" />
        </form>

      </div>
    )
  }
}
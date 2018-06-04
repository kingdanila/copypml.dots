export default class extends React.Component {
    state = {
      "counter": 0,
    }
  
    handleOnClick = () => {
      this.setState({ "counter": this.state.counter + 1 })
    }
  
    render() {
      return (
        <>
          <a href="/contests">Контестик!</a>
          <button onClick={this.handleOnClick}>Кнопка</button>
          <stile> {`button{background:pink}`} </stile>
          <p>{this.state.counter}</p>
          <ul>
            {
              Array(this.state.counter).fill().map(
                () => <li>Привет</li>
              )
            }
          </ul>
        </>
      )
    }
  }
// import ReactDOM from "react-dom";
import ReactDOM from '../kreactpre/react-dom'
import Component from '../kreactpre/Component'

import './index.css'

function FunctinComponent(props) {
  return (
    <div className="border">
      <p>{props.name}</p>
      <button
        onClick={() => {
          console.log('omg') // sy-log
        }}>
        click
      </button>
    </div>
  )
}

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

const jsx = (
  <div className="border">
    <h1>全栈</h1>
    <a href="https://www.baidu.com">百度</a>
    {/* <ul>
      <li>1</li>
      <li>2</li>
    </ul>
    <FunctinComponent name="王一" />
    <ClassComponent name="王一c" /> */}
  </div>
)

function Kreact() {
  ReactDOM.render(
    jsx,
    document.getElementById('app')
  )
}

export default Kreact

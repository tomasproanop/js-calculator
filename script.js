function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ['/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add' };


class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      lastPressed: undefined,
      calc: '0',
      operation: undefined });_defineProperty(this, "handleClick",


    e => {
      const { calc, lastPressed } =
      this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case 'AC':{
            this.setState({
              calc: '0' });

            break;
          }

        case '=':{
            const evaluated = eval(calc);
            this.setState({
              calc: evaluated });

            break;
          }

        case '.':{
            const splitted =
            calc.split(/[+\-\*\/]/);
            const last = splitted.slice(-1)[0];

            if (!last.includes('.')) {
              this.setState({
                calc: calc + '.' });

            }

            break;
          }

        default:{
            let e = undefined;
            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== '-') {
                const lastNumberIdx = calc.split('').reverse().
                findIndex(char => char !== ' ' && nums.includes(+char));
                e = calc.slice(0, calc.length - lastNumberIdx) + `${innerText} `;
              } else {
                e = `${calc} ${innerText} `;
              }
            } else {
              e = calc === '0' ? innerText : calc + innerText;
            }

            this.setState({
              calc: e });

          }}


      this.setState({
        lastPressed: innerText });

    });}

  render() {
    const { currentNumber, calc } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/

      React.createElement("div", { id: "display", className: "display" },
      calc), /*#__PURE__*/


      React.createElement("div", { className: "nums-container" }, /*#__PURE__*/
      React.createElement("button", { className: "big-h light-grey ac",
        onClick: this.handleClick,
        id: "clear" }, "AC"),




      nums.map((num) => /*#__PURE__*/
      React.createElement("button", { className: `dark-brown ${num === 0 && 'big-h'}`,
        key: num,
        onClick: this.handleClick,
        id: ids[num] },

      num)), /*#__PURE__*/



      React.createElement("button", { className: "light-grey",
        onClick: this.handleClick,
        id: "decimal" }, ".")), /*#__PURE__*/




      React.createElement("div", { className: "ops-container" },
      ops.map((op) => /*#__PURE__*/
      React.createElement("button", { className: "orange",
        key: op,
        onClick: this.handleClick,
        id: ids[op] },

      op)), /*#__PURE__*/



      React.createElement("button", { className: "orange",
        onClick: this.handleClick,
        id: "equals" }, "="))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
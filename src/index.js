// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />


//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react"
import ReactDOM from "react-dom"

function Page() {
    return (
      <div>
        <header>
            <nav>
                <img src="./logo192.png" width="40px" alt="site" />
            </nav>
        </header>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>React is awesome</li>
          <li>We need it for a job</li>
          <li>I want to be a better developer</li>
        </ol>
        <footer>
          <small>© 2022 Thomas development. All rights reserved.</small>
        </footer>
      </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

import { useState } from "react";
import Header from "./components/Header";
import initialEmails from "./data/emails";

import "./styles/App.css";

function App() {
  const [emails, setEmails] = useState(initialEmails);

  const handleCheckboxChange = (index) => {
    const updatedEmails = [...emails];
    updatedEmails[index].selected = !updatedEmails[index].selected;
    setEmails(updatedEmails);
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email, index) => (
          <li className="email" key={index}>
            <div className="select">
              <input
                onChange={() => handleCheckboxChange(index)}
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
              />
            </div>
            <div>
              <div className="sender">{email.sender}</div>
              <div className="title"> {email.title}</div>
            </div>
          </li>
        ))}
      </main>
    </div>
  );
}

export default App;

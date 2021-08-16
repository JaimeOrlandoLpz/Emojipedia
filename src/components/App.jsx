import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(function (emo) {
          return (
            <Entry
              key={emo.id}
              emoji={emo.emoji}
              name={emo.name}
              desc={emo.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;

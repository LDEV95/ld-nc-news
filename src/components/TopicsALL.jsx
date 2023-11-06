// // ... other imports ...

// export default function TopicsPages({ onSelectTopic }) {
//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     api.getTopics().then(({ topics }) => {
//       console.log(topics);
//       setTopics(topics);
//     });
//   }, []);

//   return (
//     <ul className="topicsList">
//       <li>
//         <button onClick={() => onSelectTopic("")}>All Topics</button>
//       </li>
//       {topics.map((eachTopic) => (
//         <li key={eachTopic.slug}>
//           <button onClick={() => onSelectTopic(eachTopic.slug)}>
//             {eachTopic.slug}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

import * as api from "../../api";
import { useEffect, useState } from "react";

// ... other imports ...

export default function TopicsPages({ onSelectTopic }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then(({ topics }) => {
      console.log(topics);
      setTopics(topics);
    });
  }, []);

  return (
    <select onChange={(e) => onSelectTopic(e.target.value)}>
      <option value="">Browse articles by topic</option>

      {topics.map((eachTopic) => (
        <option key={eachTopic.slug} value={eachTopic.slug}>
          {eachTopic.slug}
        </option>
      ))}
    </select>
  );
}

import { getTopics } from "../../api";
import { useEffect, useState } from "react";

export default function topicsPages() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      console.log(topics);
      setTopic(topics);
    });
  }, []);
}

import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(addANewTag) {
    const tagsWithNewTag = [...tags, addANewTag];

    setTags(tagsWithNewTag);
  }

  function handleDeleteTag(xyz) {
    setTags(tags.filter((tag) => tag !== xyz));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}

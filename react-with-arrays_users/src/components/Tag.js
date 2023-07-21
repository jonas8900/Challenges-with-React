import "./Tag.css";

export default function Tag({ tag }) {
  const tagIfAdmin = tag === "admin" ? "tag tag--highlight" : "tag";

  return <li className={tagIfAdmin}>{tag}</li>;
}

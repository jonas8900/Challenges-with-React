import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { useRouter } from "next/router";

export default function BookName() {
  const router = useRouter();
  const currentSlug = router.query.BookName;
  const currentVolume = volumes.find(({ slug }) => slug === currentSlug);
  const nextSlug = current

  if (!currentVolume) {
    return "Error";
  }

  return (
    <>
      <h1>{currentVolume.title}</h1>
      <p>{currentVolume.description}</p>
      <ul>
        {currentVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}, {book.title}
          </li>
        ))}
      </ul>

      <Link href="/Volumes">link back to the volumes</Link>
      <div>
        <button>previous page</button>
        <button>next page /</button>
      </div>
    </>
  );
}

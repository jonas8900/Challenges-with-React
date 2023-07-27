import Link from "next/link";
import { introduction } from "@/resources/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/Volumes/the-fellowship-of-the-ring">
            The fellowship of the Rings
          </Link>
        </li>
        <li>
          <Link href="/Volumes/the-two-towers">The two towers</Link>
        </li>
        <li>
          <Link href="/Volumes/the-return-of-the-king">
            The return of the king
          </Link>
        </li>
      </ul>
    </>
  );
}

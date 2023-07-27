import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import { eslint } from "@/next.config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function theFellowshipOfTheRing() {
  const router = useRouter();

  const bookName = router.query.bookName;
  console.log(bookName);

  console.log(bookName);

  const volume = volumes.find(({ slug }) => slug === bookName);

  const { title, ordinal, description } = volume;

  function handleNextPage() {
    if (currentIndex < volumes.length) {
      setCurrentIndex(currentIndex + 1);

      router.push(`/Volumes/${volumes[currentIndex].slug}`);
    } else {
      setCurrentIndex(1);
    }
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={ordinal}>
            {ordinal}, {description}
          </li>
        ))}
      </ul>

      <Link href="/Volumes">link back to the volumes</Link>
      <div>
        <button>previous page</button>
        <button onClick={handleNextPage}>next page /</button>
      </div>
    </>
  );
}

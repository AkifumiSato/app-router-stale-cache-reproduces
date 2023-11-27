import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Top page
      </h1>
      <ul>
        <li>
          <Link href="/a">page-a</Link>
        </li>
        <li>
          <Link href="/a">page-b</Link>
        </li>
      </ul>
    </main>
  )
}

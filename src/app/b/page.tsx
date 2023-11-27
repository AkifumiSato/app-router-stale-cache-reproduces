import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Page B
      </h1>
      <ul>
        <li>
          <Link href="/a">page-a</Link>
        </li>
      </ul>
    </main>
  )
}

export const dynamic = 'force-dynamic';

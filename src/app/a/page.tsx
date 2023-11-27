import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>
        Page A
      </h1>
      <ul>
        <li>
          <Link href="/b">page-b</Link>
        </li>
      </ul>
    </main>
  )
}

export const dynamic = 'force-dynamic';

import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-24">
      <h1>index page</h1>
      <Link href="/home">go to home</Link>
    </main>
  );
}

"use client"; // Error components must be Client Components

export default function Error() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 grow text-xl text-center p-2">
      <h1 className="text-4xl gradient-text font-semibold">Oops</h1>
      <h2>Something went wrong!</h2>
      <h2>Please go back to home page!</h2>
    </main>
  );
}

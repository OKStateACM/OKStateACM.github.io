export default function Header() {
  return (
    <header className="bg-white py-5 border-b-4 border-orange-500">
      <div className="flex items-center justify-between w-full text-gray-500">
        <div className="pl-50 text-3xl gap-15">ACM@OkState</div>

        <div className="flex gap-15 items-center flex-col sm:flex-row pr-60">
          <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/">
            Home
          </a>
          <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/officers">
            Officers
          </a>
          <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/calendar">
            Events
          </a>
          <a className="rounded-sm py-2 px-6 underline underline-offset-4 [text-decoration-color:#f97316] hover:bg-orange-300" href="/about">
            About Us
          </a>
        </div>
      </div>
    </header>
  );
}

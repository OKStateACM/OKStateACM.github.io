export default function Calendar() {
    return (
        <main>
          <a
            className="rounded-full py-3 px-6 border border-solid bg-black"
            href="/" //Link to somewhere.
            target="_self" //_self opens link in the same frame. _blank opens in a new tab/window. Note that it is already _self by default. Putting this here for emphasis.
          >
            Go Back
          </a>
        </main>
    )
}
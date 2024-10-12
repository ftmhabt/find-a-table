import Search from "../general/search";

export default function header() {
  return (
    <header
      className={`flex min-h-20 h-full py-4 px-6 bg-secondary text-primary items-center justify-evenly`}
    >
      <Search />
    </header>
  );
}

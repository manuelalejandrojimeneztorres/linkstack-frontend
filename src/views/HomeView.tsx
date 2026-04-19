import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function HomeView() {
  return (
    <>
      <Header />

      {/* <main className="bg-gray-100 py-10 min-h-screen bg-no-repeat bg-right-top lg:bg-[url('/background_home.svg')] lg:bg-[length:50%]"> */}
      <main className="bg-gray-100 py-10 min-h-screen bg-no-repeat bg-right-top lg:bg-home lg:bg-home-xl">
        <div className="max-w-5xl mx-auto mt-10">
          <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
            <h1 className="text-6xl font-black">
              One link. Your entire{" "}
              <span className="text-cyan-400">digital stack</span>.
            </h1>

            <p className="text-slate-800 text-xl">
              Join over 200,000 professionals and creators amplifying their
              reach. Seamlessly connect your audience to your TikTok, Instagram,
              GitHub, and beyond—through one unified gateway.
            </p>

            <SearchForm />
          </div>
        </div>
      </main>
    </>
  );
}

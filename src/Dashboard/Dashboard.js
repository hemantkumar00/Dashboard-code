import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

export default function Dashboard() {
  return (
    <>
      <div className="container-dashboard">
        <header>
          <Header />
        </header>
        <aside>
          <Aside />
        </aside>
        <main>
          <Main />
        </main>
      </div>
    </>
  );
}

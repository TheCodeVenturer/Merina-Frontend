import { LeftBar, NavBar, About, Activity, Analytics } from "./components";


export default function Home() {
  return (
    <main>
      <LeftBar />  {/* LeftBar */}
      <div className="main-content"> {/*RightBar or DashBoard*/}
        <NavBar/>
        <About />
        <Activity />
        <Analytics />
      </div>
    </main>
  );
}

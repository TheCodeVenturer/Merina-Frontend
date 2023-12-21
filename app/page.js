import { LeftBar, NavBar, About, Activity, Analytics } from "./components"


export default function Home() {
  return (
   <main>
    <LeftBar/>
    <div className="main-content">
      <NavBar/>
      <About/>
      <Activity/>
      <Analytics/>
    </div>
   </main>
  )
}

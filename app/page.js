import { LeftBar, NavBar } from "./components"


export default function Home() {
  return (
   <main>
    <LeftBar/>
    <div className="main-content">
      <NavBar/>
    </div>
   </main>
  )
}

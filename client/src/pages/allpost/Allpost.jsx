import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Every from "../../components/every/Every";
import Rightbar from "../../components/rightbar/Rightbar";
import "./allpost.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Every/>
        <Rightbar/>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";
function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      GlobeLog
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Home;

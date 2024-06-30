import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";

function Home() {
  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("todos", ["uid", "==", user.uid]);
  console.log(data);
  return <div>Home</div>;
}

export default Home;

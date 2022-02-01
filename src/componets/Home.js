import { useSelector } from "react-redux";
import PostContainer from "./PostContainer";
import UserCard from "./UserCard";

const Home = () => {
  const state = useSelector((state) => state.rootreducer.HomeSlice);
  return (
    <>
      <div
        className=" p-2 mx-auto"
        style={{ maxWidth: 500, background: "darkgray" }}
      >
        <PostContainer />
        <div className="userPostWall" style={{ position: "relative" }}>
          <div className="overlay"></div>
          {state.userDataArr.map((item, i) => (
            <UserCard obj={item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

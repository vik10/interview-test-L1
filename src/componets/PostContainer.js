import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleTextAreaVal } from "../reducer/HomeSlice";
import { randomColorGenrtr } from "../utils";
import GifContainer from "./GifContainer";

const PostContainer = () => {
  const [active, setActive] = useState(false);
  const [textAreaVal, setTextAreaVal] = useState("");
  const state = useSelector((state) => state.rootreducer.HomeSlice);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <div
        className="postCont position-relative p-2 top-0 start-0 w-100 h-100"
        style={{ zIndex: 2 }}
      >
        <div className="bg-light">
          <div className="m-2">
            <div className="row my-1">
              <span className="col-auto">
                <i className="fa fa-edit"></i> Compose Post
              </span>
              <span className="col">
                <i className="fa fa-camera"></i> Photo/Video Album
              </span>
              <span className="col-auto">X</span>
            </div>
            <div className="bg-light">
              <div className="p-2  bg-white">
                <div className="d-flex">
                  <img
                    alt="user-icon"
                    style={{ width: 50, height: 50 }}
                    src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
                  ></img>
                  <textarea
                    name=""
                    id="userTextBox"
                    placeholder="your thought"
                    className="w-100"
                    value={textAreaVal}
                    onInput={(e) => setTextAreaVal(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end pe-2">
                  <span className="pointer"> &#128513;</span>
                </div>
                {state.gifUrl && (
                  <img src={state.gifUrl} className="w-100 my-2" alt="gifPic" />
                )}
                <div className="d-flex gap-1" style={{ overflowX: "scroll" }}>
                  {Array.from({ length: 30 }).map((item, i) => (
                    <div
                      className="rounded border border-2 my-2"
                      key={i}
                      style={{
                        minWidth: 25,
                        height: 25,
                        background: randomColorGenrtr(),
                      }}
                    ></div>
                  ))}
                </div>
                <div className="row gap-3 mx-0 mt-2">
                  <span
                    className="col-3 pointer bg-secondary rounded-pill text-light"
                    style={{ fontSize: 12 }}
                  >
                    <i className="fa fa-tag"></i> Tag Friend
                  </span>
                  <div className="col-3 position-relative px-0">
                    <div
                      className="pointer ps-2 rounded-pill text-light bg-primary"
                      style={{ fontSize: 12 }}
                      onClick={() => setActive(!active)}
                    >
                      <i className="fa fa-gift"></i> Gif
                    </div>
                    <div
                      className="position-absolute start-50 translate-middle-x"
                      style={{ top: 38 }}
                    >
                      {active && <GifContainer setActive={setActive} />}
                    </div>
                  </div>
                  <span
                    className="col-3 pointer rounded-pill text-light bg-warning"
                    style={{ fontSize: 12 }}
                  >
                    <i className="fa fa-location-arrow"></i> location
                  </span>
                  <span
                    className="col-3 pointer rounded-pill text-light bg-dark"
                    style={{ fontSize: 12 }}
                  >
                    check in
                  </span>
                  <span
                    className="col-3 pointer rounded-pill text-light bg-danger"
                    style={{ fontSize: 12 }}
                  >
                    pic
                  </span>
                </div>
              </div>
              <div className="row mx-0 py-2">
                <div className="col"></div>
                <button className="btn btn-sm btn-outline-secondary col-auto">
                  &#128274; only me &#8681;
                </button>
                <button
                  className="btn btn-sm ms-2 btn-primary col-auto"
                  onClick={() => {
                    dispatch(handleTextAreaVal(textAreaVal));
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContainer;

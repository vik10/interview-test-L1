import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleGifDetail } from "../reducer/HomeSlice";

const GifContainer = (props) => {
  const [gifArr, setGifArr] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  //   const [gifSelected, setGifSelected] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    fetch(
      searchActive
        ? `https://api.giphy.com/v1/gifs/search?api_key=DOFvOH6I3o9D0KJUvF89x81IYPG9j4C1&q=${searchText}`
        : "https://api.giphy.com/v1/gifs/trending?api_key=DOFvOH6I3o9D0KJUvF89x81IYPG9j4C1"
    )
      .then((promise) => promise.json())
      .then((item) => {
        setLoading(false);
        setGifArr(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  if (!gifArr.length) {
    return <h1 className="text-center mt-4 ">Loading...</h1>;
  }
  console.log(gifArr[0].images.original.url);
  return (
    <>
      <div
        className="gifContainer position-relative p-2 rounded border border-2 bg-light"
        style={{ width: 250, height: 400, overflowY: "scroll" }}
      >
        <input
          type="text"
          name=""
          onInput={(e) => {
            setSearchActive(true);
            setSearchText(e.target.value);
          }}
          placeholder="search gif"
          className="form-control mb-2"
          style={{ height: 26 }}
        />
        {loading ? (
          <h1 className="text-center text-warning">Loading...</h1>
        ) : (
          <div className="d-grid gap-2">
            {gifArr.map((item) => (
              <img
                key={item.id}
                src={item.images.original.url}
                className="w-100"
                alt=""
                onClick={() => {
                  dispatch(handleGifDetail(item.images.original.url));
                  props.setActive(false);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GifContainer;

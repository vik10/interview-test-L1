import userInfo from "./userInfo";

const UserCard = (props) => {
  return (
    <>
      <div
        className="p-2 rounded border border-2"
        style={{ background: "white" }}
      >
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <img
              src={userInfo.imgUrl}
              alt="user-pic"
              className="rounded-circle"
              style={{ width: 50, height: 50 }}
            />
            <div>
              <h6 className="text-primary mb-1">{userInfo.name}</h6>
              <span>26 Dec 1999</span>
            </div>
          </div>
          <span className="text-secondary fs-4">...</span>
        </div>
        <p className="mt-2">{props.obj.thought}</p>
        <img
          src={props.obj.imgUrl}
          className="w-100 my-2 border border-2 rounded"
          alt="user-wall-pic"
        />
      </div>
    </>
  );
};

export default UserCard;

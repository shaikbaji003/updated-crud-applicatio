import * as React from "react";

const EditForm: React.FC<{
  setedit: any;
  curElem: any;
  setarticle: any;
  setfollowing: any;
  setfollowers: any;
  arr: any;
  users: any;
  setusers: any;
}> = ({
  setedit,
  curElem,
  setarticle,
  setfollowing,
  setfollowers,
  arr,
  users,
  setusers,
}) => {
  console.log(curElem);
  const [name, setName] = React.useState(curElem.login);
  const save = () => {
    users.map((e:any) => {
      if (e.id === curElem.id) {
        e["login"] = name;
        return e;
      }
    });
    setedit(false);
  };

  return (
    <>
      <form>
        Name:
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        Articles:
        <input
          type="number"
          value={arr[0]}
          onChange={(e) => setarticle(e.target.value)}
        />
        Following:
        <input
          type="number"
          value={arr[1]}
          onChange={(e) => setfollowing(e.target.value)}
        />
        Followers:
        <input
          type="number"
          value={arr[2]}
          onChange={(e) => setfollowers(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            save();
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default EditForm;

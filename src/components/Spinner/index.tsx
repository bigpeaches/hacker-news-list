import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center opacity-70 bg-white"
      data-testid="loader"
    >
      <ClipLoader size={100} color="blue" />
    </div>
  );
};

export default Spinner;

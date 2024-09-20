import { Link } from "react-router-dom";
import CreatePostForm from "../components/CreatePostForm";
import { ToastContainer } from "react-toastify";

function CreatePostPage() {
  return (
    <>
      <section className="w-full min-h-screen h-auto px-[5%] py-[1.5rem] flex flex-col items-center ">
        <div className="size-full  max-w-[1440px] flex flex-col gap-[1.5rem]">
          <h1 className="text-[3rem] font-semibold">Create Post Page</h1>
          <CreatePostForm />
          <Link to="/" className="text-center hover:underline">
            Back to Home
          </Link>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}

export default CreatePostPage;
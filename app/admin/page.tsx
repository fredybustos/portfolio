"use client"
import DropFile from "@/components/dropFile";
import Spinner from "@/components/spinner";
import useAdmin from "./useAdmin";

export default function Admin() {
  const { isLoading, image, onSubmit, onDropImage, onChangeValue } = useAdmin()
  return (
    <div className="pl-8 pr-5 relative">
      <h2 className="text-xl lg:text-[1.5vw] mb-1 font-bold">Add post</h2>
      <div className="pb-4">
        <div className="my-10">
          <DropFile onDrop={onDropImage} image={image} />
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={onChangeValue}
            className="w-full h-11 mb-6 rounded-md border-2 px-2"
          />
          <textarea
            rows={12}
            name="content"
            placeholder="Content"
            onChange={onChangeValue}
            className="border-2 rounded p-2 w-full"
          />
        </div>
      </div>
      <div className="text-right absolute bottom-0 right-5">
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-28 h-11 bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          {isLoading && <Spinner />}
          Send
        </button>
      </div>
    </div>
  )
}

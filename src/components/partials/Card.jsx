import sampleImage from "/product1.jpeg";
export default function Card({ title, description, image }) {
  return (
    <>
      <div className="shadow-md m-2 rounded-md">
        <img src={image} alt="this is card" className="rounded-t-md w-full h-1/2 object-cover" />
        <div className="flex flex-col justify-between h-1/2">
          <div className="pt-2 ps-2">
            <h3 className="font-bold text-darkblue text-lg">{title}</h3>
            <p className="my-2 max-h-1/3 text-sm text-zinc-500 card-description">{description}</p>
          </div>
          <div className="bottom-0 flex justify-start m-2">
            <button className="relative bg-baseblue-100 hover:bg-baseblue-200 px-7 sm:px-3 py-2 rounded-md text-sm text-white">Get detail</button>
          </div>
        </div>
      </div>
    </>
  );
}

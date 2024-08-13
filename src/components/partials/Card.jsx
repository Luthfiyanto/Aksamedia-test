export default function Card({ product }) {
  const { title, description, price, image } = product;
  return (
    <>
      <div className="bg-white dark:bg-darkblue shadow-md dark:shadow-lg dark:shadow-dark m-2 rounded-md">
        <img src={image} alt="this is card" loading="lazy" className="rounded-t-md w-full h-1/2 object-cover" />
        <div className="flex flex-col justify-between h-1/2">
          <div className="pt-2 ps-2">
            <h3 className="font-bold text-darkblue text-lg dark:text-white card-title">{title}</h3>
            <p className="my-2 max-h-1/3 text-sm text-zinc-500 card-description">{description}</p>
          </div>
          <div className="bottom-0 flex justify-between items-center m-2">
            <button className="relative hover:dark:border-zinc-200 dark:border-zinc-600 bg-baseblue-100 hover:bg-baseblue-200 dark:bg-transparent px-7 sm:px-3 py-2 border border-transparent rounded-md text-sm text-white">Get Detail</button>
            <p className="text-sm text-zinc-500">$ {price}.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

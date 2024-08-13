export default function InputText({ type, dataName, value, trigger }) {
  return (
    <div>
      <input
        type={type}
        id={dataName}
        placeholder=""
        className={`border-b-2 focus:border-baseblue-100 dark:bg-darkblue dark:text-white w-full transition-all ease-in-out outline-none peer`}
        onChange={(e) => trigger(e.target.value)}
        value={value}
      />
      <label
        htmlFor={dataName}
        className={`relative -top-12 peer-focus:-top-12 peer-placeholder-shown:-top-7 text-sm peer-focus:text-sm peer-focus:text-baseblue-100 peer-placeholder-shown:text-base dark:text-white transition-all ease-in-out`}
      >
        {dataName}
      </label>
    </div>
  );
}

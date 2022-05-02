
export default function Message({own}) {
  return (
    <div className={own  ? "message own":"message"}>
      <div className="flex">
        <img
          className="rounded-full h-8 w-8 object-cover mr-5"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum qui, minima suscipit saepe reiciendis beatae pariatur eos. Debitis ipsum officiis soluta minus. Animi fuga corporis repellendus eum! Voluptas, eius neque?</p>
      </div>
      <div className="text-xs mt-2.5">1 hour ago</div>
    </div>
  );
}
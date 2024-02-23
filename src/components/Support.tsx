import { useState } from "react";

const Support = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <section className="mx-auto text-center mt-2 mb-3">
      <h3 className="font-semibold">Support creator by send ETH</h3>
      <p className="text-sm mt-1">It also help this tools growth...</p>
      <section className="space-x-1 mt-2">
        <button
          className={`btn btn-xs ${isActive === 1 ? "btn-active" : ""}`}
          onClick={() => setIsActive(1)}
        >
          0.1 ETH
        </button>
        <button
          className={`btn btn-xs ${isActive === 2 ? "btn-active" : ""}`}
          onClick={() => setIsActive(2)}
        >
          1 ETH
        </button>
        <button
          className={`btn btn-xs ${isActive === 3 ? "btn-active" : ""}`}
          onClick={() => setIsActive(3)}
        >
          10 ETH
        </button>
      </section>
      <button className="btn mt-2 btn-sm btn-success text-white">Send</button>
    </section>
  );
};

export default Support;

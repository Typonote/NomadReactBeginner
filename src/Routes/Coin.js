import React, { useEffect, useState } from "react";
import { CoinApi } from "../API/CoinApi";
import Loading from "../Components/Loading";

const Coin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);

  const onChangeHandler = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };

  const InputHandler = (event) => {
    setNeed(event.target.value);
  };

  const GetCoinAPI = async () => {
    // 요청이 시작 할 때 초기화
    setError(null);
    setCoins(null);
    setLoading(true);
    const CoinResponse = await CoinApi.Get_Coin("")
      .then((response) => {
        console.log("Coin", response.data);
        setCoins(response.data);
      })
      .catch((e) => {
        setError(e);
      });
    setLoading(false);
    return CoinResponse;
  };

  useEffect(() => {
    GetCoinAPI();
  }, []);

  if (loading) return <Loading />;
  if (error)
    return (
      <>
        <div>API 에러가 발생했습니다</div>
      </>
    );
  if (!coins) return null;

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-lg text-gray-400 font-bold mt-7 text-accent mb-3">
        {loading ? "" : `${coins.length}개의 코인 정보를 불러왔습니다.`}
      </h1>
      <h1 className="text-2xl font-bold mt-7 text-accent my-3">
        어느 코인을 원하시나요?
      </h1>
      <select
        className="w-2/3 md:w-1/3 bg-white shadow-lg max-h-56 rounded-md"
        onChange={onChangeHandler}
      >
        {coins.map((value, index) => (
          <option key={index} value={value.quotes.USD.price}>
            {value.name} ({value.symbol}) : $
            {Math.round(value.quotes.USD.price)} USD
          </option>
        ))}
      </select>
      <h1 className="text-2xl font-bold mt-7 text-accent my-3">
        얼마를 소유하고 계신가요?
      </h1>
      <div>
        <input
          type="number"
          value={need}
          onChange={InputHandler}
          placeholder="dollor"
        />
        $
      </div>
      <h2 className="text-xl text-gray-700 font-bold mt-7 text-accent my-3">
        {(need / cost).toFixed(5)}개의 코인을 얻을 수 있습니다.
      </h2>
    </div>
  );
};

export default Coin;

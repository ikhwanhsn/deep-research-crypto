export const GET = async () => {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_API_KEY_CMC || "",
      },
    }
  );
  const result = await res.json();
  const data = result.data;
  const cryptoName = data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  return new Response(
    JSON.stringify({
      cryptoName,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

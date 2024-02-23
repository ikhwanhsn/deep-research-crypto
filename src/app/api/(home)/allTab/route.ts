export const GET = async () => {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=25`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_API_KEY_CMC || "",
      },
    }
  );
  const result = await res.json();
  return new Response(
    JSON.stringify({
      result,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const GET = async () => {
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=25`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_API_KEY_CMC || "",
      },
      cache: "no-store",
    }
  );
  const result = await res.json();
  const data = result.data;
  return new Response(
    JSON.stringify({
      data,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

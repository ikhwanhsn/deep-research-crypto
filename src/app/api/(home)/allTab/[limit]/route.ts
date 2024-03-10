export const GET = async (request: Request, { params }: any) => {
  const { limit } = params;
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}`,
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

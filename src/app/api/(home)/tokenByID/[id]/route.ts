export const GET = async (req: Request) => {
  const url = req.url;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${id}`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_API_KEY_CMC || "",
      },
      cache: "no-store",
    }
  );
  const result = await res.json();
  const response = result.data;
  return new Response(
    JSON.stringify({
      response,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

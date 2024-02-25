export const GET = async (req: Request) => {
  const url = req.url;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const res = await fetch(
    `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${id}`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": process.env.NEXT_PUBLIC_API_KEY_CMC || "",
      },
    }
  );
  const result = await res.json();
  const platform = result?.data[id]?.urls;
  return new Response(
    JSON.stringify({
      platform,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

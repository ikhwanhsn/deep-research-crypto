export const getMetadataCrypto = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/metadataCrypto/${id}`);
  const data = await res.json();
  console.log("🚀 ~ getMetadataCrypto ~ data:", data.platform);
  return data.platform;
};

export const formatCryptoNumber = (value: number) => {
  try {
    if (value < 0.0001) {
      return value.toFixed(6);
    }
    if (value < 1) {
      return value.toFixed(4);
    }
    if (Math.abs(value) >= 1.0e12) {
      return (value / 1.0e12).toFixed(2) + "T";
    }
    if (Math.abs(value) >= 1.0e9) {
      return (value / 1.0e9).toFixed(2) + "B";
    }
    if (Math.abs(value) >= 1.0e6) {
      return (value / 1.0e6).toFixed(2) + "M";
    }
    if (Math.abs(value) >= 1.0e3) {
      return (value / 1.0e3).toFixed(2) + "K";
    }
    return value.toFixed(2);
  } catch (error) {
    console.log(error);
  }
};

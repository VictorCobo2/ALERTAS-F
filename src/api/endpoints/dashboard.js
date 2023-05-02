export const getAlertas = async () => {
  try {
    const ALERTAS = await fetch(`http://localhost:3001/api/get_alertas`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDM1NzZmMGJmMjZiNDNiMmRkZmYwZDYiLCJpYXQiOjE2ODI0NjU1NjIsImV4cCI6MTcxNDAwMTU2Mn0.6DasYqFa46raobWvR1iznRqQIomMQqBpTDMYwT8plOM",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error", error));

    return ALERTAS;
  } catch (error) {}
};

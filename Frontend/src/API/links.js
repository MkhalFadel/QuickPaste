export async function sendData(body)
{
   try {
      const res = await fetch('http://localhost:5000/api/links/', {
         method: 'POST',
         headers: { "Content-Type": 'application/json' },
         body: JSON.stringify(body)
      });
      const data = await res.json();
      return data;
   } catch (error) {
      console.log("API CALL ERROR:", error);
   }
}

export async function getLinkInfo(id)
{
   try {
      const res = await fetch(`http://localhost:5000/api/links/view/${id}`);
      return await res.json();
   } catch (error) {
      console.log('API CALL ERROR:', error);
   }
}
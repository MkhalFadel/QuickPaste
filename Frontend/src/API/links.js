const API_URL = import.meta.env.VITE_API_URL

export async function sendData(body)
{
   try {
      const res = await fetch(`${API_URL}/api/links/`, {
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
      const res = await fetch(`${API_URL}/api/links/view/${id}`);
      return await res.json();
   } catch (error) {
      console.log('API CALL ERROR:', error);
   }
}
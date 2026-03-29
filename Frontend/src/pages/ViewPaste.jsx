import PasteBox from "../components/PasteBox";
import { getLinkInfo } from "../API/links";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { copyText } from "../utils";
import { BounceLoader, ErrorAlert } from '@mkhalfadel/modoui-core'

function ViewPaste() {

   const {id} = useParams();
   const [content, setContent] = useState("");
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      async function loadData()
      {
         const data = await getLinkInfo(id);
         setTimeout(() => {
            setLoading(false)
            if(data.error)
               setError(data.error);
            else
               setContent(data.content);
         }, 1000)
      }

      loadData();
   }, [id])

   const loadingProps = {
      marginTop: "100px",
      marginBottom: "50px"
   }

   const alertProps = {
      color: "white",
      width: "100%",
      marginBottom: "25px"
   }

   return (
      <div style={styles.container}>
         <h1>View Paste</h1>
         {error && <ErrorAlert text={error} props={alertProps} />}
         {loading && <BounceLoader props={loadingProps} />}
         {!loading && <PasteBox readOnly value={content} />}

         <div style={styles.actions}>
            <button style={styles.button} onClick={() => copyText(content)} disabled={!loading}>Copy</button>
         </div>
      </div>
   );
}

const styles = {
   container: {
      position: 'relative',
      maxWidth: "800px",
      margin: "2rem auto",
      padding: "1rem"
   },
   actions: {
      marginTop: "1rem"
   },
   button: {
      padding: "0.5rem 1rem",
      background: "#111",
      color: "#fff",
      border: "none",
      cursor: "pointer"
   }
};

export default ViewPaste;
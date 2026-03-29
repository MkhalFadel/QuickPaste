function PasteBox({ value, setValue, readOnly = false }) {
   return (
      <textarea
         readOnly={readOnly}
         onChange={(e) => setValue(e.target.value)}
         placeholder="Paste your text here..."
         value={value}
         style={styles.textarea}
      />
   );
}

const styles = {
   textarea: {
      width: "100%",
      height: "300px",
      padding: "1rem",
      fontFamily: "monospace",
      fontSize: "14px",
      borderRadius: "8px",
      border: "1px solid #ccc"
   }
};

export default PasteBox;
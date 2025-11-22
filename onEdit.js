const onEdit = (e) => {
  upperCase(e);
  fontSize(e)
}


const upperCase = (e) => {
  const range = e.range;
  const sheet = range.getSheet().getSheetName();
  const columnNumber = range.getColumn();
  const rowNumber = range.getRow();
  const cellValue = range.getValue();

  if (columnNumber !== 1) return;
  if (rowNumber < 2) return;
  if (sheet !== "Database") return;

  const upperCaseValue = cellValue.toString().toUpperCase();
  range.setValue(upperCaseValue);

}


const fontSize = (e) => {
  const range = e.range;
  const sheet = range.getSheet().getSheetName();
  const columnNumber = range.getColumn();
  const rowNumber = range.getRow();

  if (columnNumber !== 1 && columnNumber !== 2 && columnNumber !== 3 && columnNumber !== 4 ) return;
  if (rowNumber < 2) return;
  if (sheet !== "Database") return;

  range.setFontSize(14);

}

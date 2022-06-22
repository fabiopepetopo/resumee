import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Download = () => {
  const printDocument = () => {
    const layout = document.getElementById("layout");
    html2canvas(layout).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return <button onClick={printDocument}>PDF download</button>;
};

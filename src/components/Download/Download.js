import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Download = () => {
  const printDocument = () => {
    const layout = document.getElementById("layout");

    html2canvas(layout).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 190;
      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("pt", "mm");
      let position = 0;
      doc.addImage(imgData, "PNG", 10, 0, imgWidth, imgHeight + 25);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        console.log("position");
        console.log(position);
        doc.addPage();
        doc.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight + 15);
        heightLeft -= pageHeight;
      }
      doc.save("download.pdf");
    });
  };

  return <button onClick={printDocument}>PDF download</button>;
};

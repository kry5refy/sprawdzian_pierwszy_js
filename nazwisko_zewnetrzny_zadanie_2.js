document.write("Podaję czas".fontcolor("blue").bold().fontsize(5)+"<br><br><br><br><br>");
dzis_naz = new Date();
document.write("Aktualny czas : ".fontcolor("red").strike().fontsize(7)+dzis_naz.getHours()+":".fontcolor("green").fontsize(7)+dzis_naz.getMinutes());
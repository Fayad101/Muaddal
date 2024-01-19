function toggleTable() {
  var table4x4 = document.getElementById('table-4x4');
  var table2x3 = document.getElementById('table-2x3');

  if (table4x4.style.display === 'none') {
      table4x4.style.display = 'block';
      table2x3.style.display = 'none';
  } else {
      table4x4.style.display = 'none';
      table2x3.style.display = 'block';
  }
}

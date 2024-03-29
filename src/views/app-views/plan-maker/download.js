export function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', `data:json/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

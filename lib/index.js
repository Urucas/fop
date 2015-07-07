export default function fop(path) {
  
  if(path == undefined) return "";
  
  let separator = "/";
  if(/\\/.test(path)) separator = "\\";
  
  if(path.indexOf(separator) == -1) return separator;

  let folders = path.split(separator);
  
  let len = folders.length;
  folders = folders.splice(0, len-1);

  folders = folders.join(separator)+separator;
  return folders;
}

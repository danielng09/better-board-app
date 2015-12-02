export function sourceNameHashtoArray(hash) {
  let sources = [];
  for (let key in hash) {
    if (hash[key]) {
      sources.push(key)
    }
  }

  return sources;
}

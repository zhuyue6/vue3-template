interface UrlQuerys {
  [index: string]: any
}

export function getUrlQuerys(): UrlQuerys | null {
  let query: UrlQuerys | null = null
  let queryArray = window.location.search.substring(1).split('&').filter((item) => item !== '')
  if (queryArray.length > 0) {
    const reg = /(\S*)=(\S*)/;
    query = {}
    for (const queryItem of queryArray) {
      const r = queryItem.match(reg)
      if (r != null) {
        query[r[1]] = decodeURI(r[2]);
      }
    }
  }
  return query
}

export function getUrlQuery(name: string): string | null {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substring(1).match(reg);
  if (r != null) {
      return decodeURI(r[2]);
  };
  return null;
}
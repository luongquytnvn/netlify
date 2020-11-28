export function replaceVietnamese(str) {
  if (str === null || str === undefined) {
    return str;
  }
  str = str.replace(/[â]/g, "aa");
  str = str.replace(/[àáạảãầấậẩẫăằắặẳẵ]/g, "a");
  str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
  str = str.replace(/[ìíịỉĩ]/g, "i");
  str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
  str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
  str = str.replace(/[ỳýỵỷỹ]/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/[ÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴ]/g, "A");
  str = str.replace(/[ÈÉẸẺẼÊỀẾỆỂỄ]/g, "E");
  str = str.replace(/[ÌÍỊỈĨ]/g, "I");
  str = str.replace(/[ÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠ]/g, "O");
  str = str.replace(/[ÙÚỤỦŨƯỪỨỰỬỮ]/g, "U");
  str = str.replace(/[ỲÝỴỶỸ]/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Combining Diacritical Marks
  // str = str.replace(/[\u0300\u0301\u0303\u0309\u0323]/g, ""); // huyền, sắc, hỏi, ngã, nặng
  // str = str.replace(/[\u02C6\u0306\u031B]/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)

  str = str.replace(/[\u0300]/g, "f"); // huyền, sắc, hỏi, ngã, nặng
  str = str.replace(/[\u0301]/g, "s"); // huyền, sắc, hỏi, ngã, nặng
  str = str.replace(/[\u0303]/g, "r"); // huyền, sắc, hỏi, ngã, nặng
  str = str.replace(/[\u0309]/g, "x"); // huyền, sắc, hỏi, ngã, nặng
  str = str.replace(/[\u0323]/g, "."); // huyền, sắc, hỏi, ngã, nặng
  str = str.replace(/[\u02C6\u0306\u031B]/g, ""); // mũ â (ê), mũ ă, mũ ơ (ư)
  return str;
}

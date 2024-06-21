export const toLowerCaseEthereumAddress = (address:string|undefined) => {
  // 判断是否以 "0x" 开头，如果不是则返回原始值（这里假设输入的地址都是有效的）
  if (!address) {
    return "";
  }

  if (!address.startsWith("0x")) {
    return address;
  }

  // 将除了 "0x" 外的部分转换为小写
  const lowercaseAddress = `0x${address.substring(2).toLowerCase()}`;
  return lowercaseAddress;
};

export const stringToDate = (dateString: string) => {
  let numArr: number[] = dateString.split('/').map((strNum: string) => parseInt(strNum));
  return new Date(numArr[2], numArr[1]-1, numArr[0]);
}
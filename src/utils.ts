export const stringToDate = (dateString: string): Date  => {
  let numArr: number[] = dateString.split('/')
  .map((strNum: string): number => parseInt(strNum));
  return new Date(numArr[2], numArr[1]-1, numArr[0]);
}
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prevSt, currentSt) => prevSt.id || prevSt + currentSt.id,
      0);
  }
  return 0;
}

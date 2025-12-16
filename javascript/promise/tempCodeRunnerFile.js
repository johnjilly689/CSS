unction implicitly returns a Promise. Returning a value resolves it;
// throwing an object rejects it.
const checkNumber = async (number) => {
  if (number > 10) {
    return { success: true, value: number }; // object literal for success
  
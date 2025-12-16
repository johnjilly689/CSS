const responsecheck = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const fetched = await fetch(url);
    console.log(fetched);
  } catch (error) {
    console.error("There is an error in fetching", error.message);
  }
};

responsecheck();

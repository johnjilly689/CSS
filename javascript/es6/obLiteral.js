const hello = (name, classes) => {
  const obfn = {
    name,
    classes,
  };
  console.log(obfn.name);
};

hello({ name: "john", classes: 5 });

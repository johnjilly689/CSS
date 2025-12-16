for (let i = 0; i <= 5; i++) {
  console.log(`outer ${i}`);
  for (let j = 0; j <= 3; j++) {
    console.log(`inner ${i}`);
  }
}

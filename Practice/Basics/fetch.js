const url = "https://jsonplaceholder.typicode.com/users/20";
/* fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.map((user) => user.name));
  }); */

async function doWork() {
  const response = await fetch(url);
  if (response.ok) {
    const users = await response.json();
    // console.log(users.map((user) => user.name));
    console.log(users);
  } else {
    console.log("USER NOT FOUND");
  }
}

doWork();

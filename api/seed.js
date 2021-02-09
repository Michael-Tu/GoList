const { Datastore } = require("@google-cloud/datastore");
const datastore = new Datastore();

const SEED_DATA = [
  {
    key: datastore.key(["GoLists", "test"]),
    data: {
      name: "tugan",
      title: "Gan is the best",
      date: new Date("29 March 1997"),
      owner: "Admin",
      hits: 100,
    },
  },
  {
    key: datastore.key(["GoLists"]),
    data: {
      name: "demo",
      title: "Lorem ipsum dolor sit amet, consectetur.",
      date: new Date("9 April 2019"),
      owner: "Admin",
      hits: 100,
    },
  },
];

datastore.insert(SEED_DATA, function (err, apiResponse) {
  console.log(SEED_DATA); 
  if (err.code === /* ALREADY_EXISTS */ 6) {
    console.log("already exists");
  } else if (err) {
    console.log(`error: ${err.message}`);
  } else {
    console.log(apiResponse);
  }
});

// async function getData() {
//   let query = datastore
//     .createQuery("GoLists")
//     .filter("date", "<", new Date("29 March 2000"));
//   const [tasks] = await datastore.runQuery(query);
//   console.log("Tasks:");
//   tasks.forEach((task) => console.log(task));
// }

// getData();
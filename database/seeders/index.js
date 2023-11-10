import { model } from "../../models/index.js";

try {
  await model.user.upsert({
    where: { username: "ianrizky" },
    update: {},
    create: {
      username: "ianrizky",
      email: "ian.rizkypratama@gmail.com",
      name: "Septianata Rizky Pratama",
    },
  });
} catch (error) {
  console.error(error);

  process.exit(1);
} finally {
  await model.$disconnect();
}

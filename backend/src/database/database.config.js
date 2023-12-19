import { connect, set } from "mongoose";
import { UserModel } from "../interfaces/user.model.js";
import { TripModel } from "../interfaces/trip.model.js";
import { data_GroupTravel } from "../data.js";
import { data_users } from "../data.js";
import bcrypt from "bcryptjs";
const PASSWORD_HASH_SALT_ROUNDS = 10;
set("strictQuery", true);

export const connectDB = async () => {
  try {
    connect(process.env.MONGO_URI, {});
    await createUsers();
    await createTrips();
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

async function createUsers() {
  const userCount = await UserModel.countDocuments();
  if (userCount > 0) {
    console.log("Ya existen usuarios en la base de datos");
    return;
  }
  for (let user of data_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }
    console.log("Usuarios creados");
}

async function createTrips() {
    const tripCount = await TripModel.countDocuments();
    if (tripCount > 0) {
        console.log("Viajes existentes en la base de datos");
        return;
    }
    for (const trip of data_GroupTravel) {
        await TripModel.create(trip);
    }
    console.log("Viajes Creados");
}

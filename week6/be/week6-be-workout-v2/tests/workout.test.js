const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  test("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });

  // Delete workout test
  // 流程：先创建一个 workout，拿到它的 _id → 调用 DELETE 删除 → 再用同一个 _id GET，期望 404。
  // 目的：验证删除接口不仅返回 200，还会把 MongoDB 里的记录真正移除。
  test("Workout deleted successfully", async () => {
    const newWorkout = {
      title: "Workout to delete",
      reps: 15,
      load: 75,
    };
    const createResponse = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createResponse.body._id;

    await api
      .delete(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(404);
  });

  test("Workout updated successfully", async () => {
    const newWorkout = {
      title: "Workout to update",
      reps: 20,
      load: 50,
    };
    const createResponse = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createResponse.body._id;

    const updatedData = {
      title: "Updated workout",
      reps: 25,
      load: 60,
    };
    await api
      .patch(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .send(updatedData)
      .expect(200);

    const getResponse = await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    expect(getResponse.body.title).toBe(updatedData.title);
    expect(getResponse.body.reps).toBe(updatedData.reps);
    expect(getResponse.body.load).toBe(updatedData.load);
  });

  test("Single workout retrieved successfully", async () => {
    const newWorkout = {
      title: "Workout to retrieve",
      reps: 30,
      load: 80,
    };
    const createResponse = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createResponse.body._id;

    const getResponse = await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(getResponse.body._id).toBe(workoutId);
    expect(getResponse.body.title).toBe(newWorkout.title);
    expect(getResponse.body.reps).toBe(newWorkout.reps);
    expect(getResponse.body.load).toBe(newWorkout.load);
  });
});

afterAll(() => {
  mongoose.connection.close();
});

import axios from "axios";
import { string } from "prop-types";

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("fitness_tracker_token", token);
  }

  async request({ endpoint, method = "GET", data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
    };

    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    try {
      const res = await axios({ url, method, data, headers });
      return { data: res.data, error: null };
    } catch (err) {
      console.error({ errorResponse: err.response });
      const message = err?.response?.data?.error?.message;
      return { data: null, error: message || string(err) };
    }
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: "auth/me", method: "GET" });
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: "auth/login", method: "POST", data: credentials });
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: "auth/register", method: "POST", data: credentials });
  }

  async getExerciseData() {
    return this.request({ endpoint: "activity/exercise", method: "GET" });
  }

  async getCalorieData() {
    return this.request({ endpoint: "activity/calories", method: "GET" });
  }

  async getSleepData() {
    return this.request({ endpoint: "activity/sleep", method: "GET" });
  }

  async addExerciseData(data) {
    return this.request({ endpoint: "exercise", method: "POST", data: data });
  }

  async listExercises(user) {
    return this.request({ endpoint: "exercise", method: "GET" });
  }

  async listCalories(user) {
    return this.request({ endpoint: "calories", method: "GET" });
  }

  async addCalorieData(data) {
    return this.request({ endpoint: "calories", method: "POST", data: data });
  }
}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001");

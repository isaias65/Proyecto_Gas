import axios, { AxiosInstance } from "axios";
import { userModel } from "../../models/auth/userModel";


class userService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: "https://8n88s148-3000.brs.devtunnels.ms", // Reemplaza con tu URL real
      headers: { "Content-Type": "application/json" },
    });
  }

  async login(user: userModel) {
    try {
        const response = await this.api.post("/auth/login", user);
        return response.data;
    } catch (error) {
      console.error("❌ Error en el login:", error);
      throw error;
    }
  }
}

export default new userService();

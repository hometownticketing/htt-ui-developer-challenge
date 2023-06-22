import { DataItem } from "../types";

const apiUrl = process.env.BASE_PATH || "http://localhost:3000";

const getUsers = async (): Promise<DataItem[]> => {
  try {
    const res = await fetch(`${apiUrl}/api`);

    return res.json();
  } catch (error: any) {
    return [];
  }
};

export default getUsers;

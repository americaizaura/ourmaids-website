import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Método no permitido (405)
  }

  try {
    const placeId = req.query.place_id as string;
    const apiKey = "AIzaSyD6a4rfWD8-ZvwunQFW6UoyOn2_uw3l2Z0"; // Reemplaza esto con tu propia API key
    const fields = "reviews";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=${fields}`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al realizar la solicitud a Google Maps API" });
  }
}

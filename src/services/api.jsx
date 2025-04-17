import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";
const HEADERS = {
  "x-rapidapi-host": "cricket-live-line1.p.rapidapi.com",
  "x-rapidapi-key": "ced2a997a1mshe5cc3c99c76ff66p1d4298jsnf70e03e2a968", // Replace with your key
};
export const getPointsTable = async () => {
  try {
    const response = await axios.get(`${API_URL}/series/336/pointsTable`, {
      headers: HEADERS
    });

    console.log("Full API Response:", response); // Debug log

    if (!response.data?.data) {
      throw new Error("Invalid API response structure");
    }

    // Handle both possible response formats
    const teamsData = response.data.data.A || response.data.data;
    
    return teamsData.map(team => ({
      team: team.teams || team.team,
      played: team.P || team.matchesPlayed,
      won: team.W || team.matchesWon,
      lost: team.L || team.matchesLost,
      points: team.Pts || team.points,
      nrr: team.NRR || team.netRunRate,
      flag: team.flag || team.teamIcon
    }));
  } catch (error) {
    console.error("API Error Details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });
    throw error;
  }
};
// src/utils/mockDb.ts
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  phone?: string;
  location?: string;
  age?: number;
  weight?: number;
  height?: number;
  bmi?: string;
  bmiStatus?: string;
  dailyCalories?: number;
  updatedAt: string;
}

const DB_KEY = "fitpro_database_v1";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const MockDB = {
  async getProfile(userId: string): Promise<UserProfile | null> {
    await delay(300); // Simula carga
    const db = JSON.parse(localStorage.getItem(DB_KEY) || "{}");
    return db[userId] || null;
  },

  async saveProfile(userId: string, data: Partial<UserProfile>): Promise<UserProfile> {
    await delay(500); // Simula guardado en servidor
    const db = JSON.parse(localStorage.getItem(DB_KEY) || "{}");
    const current = db[userId] || {};
    
    // FUSIONAR DATOS
    const merged: UserProfile = { ...current, ...data, id: userId, updatedAt: new Date().toISOString() };

    // --- CÁLCULOS AUTOMÁTICOS (Lógica de Negocio) ---
    if (merged.weight && merged.height) {
      // 1. IMC
      const hMeters = merged.height / 100;
      const bmiVal = merged.weight / (hMeters * hMeters);
      merged.bmi = bmiVal.toFixed(1);
      
      if (bmiVal < 18.5) merged.bmiStatus = "Bajo peso";
      else if (bmiVal < 25) merged.bmiStatus = "Peso saludable";
      else if (bmiVal < 30) merged.bmiStatus = "Sobrepeso";
      else merged.bmiStatus = "Obesidad";

      // 2. Calorías (Harris-Benedict simplificado)
      const age = merged.age || 25;
      const bmr = (10 * merged.weight) + (6.25 * merged.height) - (5 * age) + 5;
      merged.dailyCalories = Math.round(bmr * 1.55); // Actividad moderada
    }

    db[userId] = merged;
    localStorage.setItem(DB_KEY, JSON.stringify(db));
    return merged;
  }
};
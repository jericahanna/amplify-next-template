"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const goalsAndAffirmations = {
  happy: {
    goal: "Take 10 minutes thank yourself for all your hard work.",
    affirmation: "You are worthy of all the joy and success that comes your way.",
  },
  sad: {
    goal: "Take a short walk.",
    affirmation: "This feeling is temporary. You have the strength to move past it.",
  },
  anxious: {
    goal: "Take 5 deep breaths.",
    affirmation: "You are capable of handling whatever comes your way.",
  },
  calm: {
    goal: "Take 15 minutes to read or meditate.",
    affirmation: "You are in control of your emotions, and today will be a great day.",
  },
  neutral: {
    goal: "Write down 3 things you're grateful for.",
    affirmation: "You are on the right path. Keep moving forward.",
  },
};

export default function MoodPage() {
  const [mood, setMood] = useState("");
  const [goal, setGoal] = useState("");
  const [affirmation, setAffirmation] = useState("");

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
    const { goal, affirmation } = goalsAndAffirmations[selectedMood] || {};
    setGoal(goal);
    setAffirmation(affirmation);
  };

  return (
    <>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Goals & Affirmations</h1>

        <div className="mb-4">
          <select
            value={mood}
            onChange={(e) => handleMoodChange(e.target.value)}
            className="border p-2"
          >
            <option value="">Select your mood</option>
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anxious">Anxious</option>
            <option value="calm">Calm</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        {mood && (
          <div>
            <h2 className="text-xl mb-2">Your Goal:</h2>
            <p>{goal}</p>

            <h2 className="text-xl mt-4 mb-2">Your Affirmation:</h2>
            <p className="italic">{affirmation}</p>
          </div>
        )}

        {mood && (
          <button
            onClick={() => alert("Goal marked as completed!")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Mark Goal as Completed
          </button>
        )}
      </main>
    </>
  );
}

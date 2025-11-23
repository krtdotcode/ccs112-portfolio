// Simple RAG simulation for chatbot
import personalData from './personalData.json';

// Function to process query and find relevant responses
export const getChatbotResponse = (query) => {
  const queryLower = query.toLowerCase().trim();

  // Find matching categories based on keywords
  const matches = [];
  for (const [category, data] of Object.entries(personalData)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) {
        const keywordLength = keyword.length;
        score += keywordLength > 3 ? keywordLength : 1;
      }
    }
    if (score > 0) {
      matches.push({ category, score, responses: data.responses });
    }
  }

  // Sort matches by score (highest first)
  matches.sort((a, b) => b.score - a.score);

  if (matches.length > 0) {
    // Choose the top match, and randomly select one of its responses
    const topMatch = matches[0];
    const response = topMatch.responses[Math.floor(Math.random() * topMatch.responses.length)];
    return response;
  }

  // Default to general responses if no good match
  const generalResponses = personalData.general.responses;
  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
};

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

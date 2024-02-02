// Function to read a sentence character by character, and determine the length, number of words, and number of vowels
function analyzeSentence(sentence) {
    // Check if the sentence ends with a period
    if (sentence[sentence.length - 1] !== '.') {
        console.log("Warning: Sentence does not end with a period!");
    }

    // Initialize variables to track sentence length, number of words, and number of vowels
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate over each character in the sentence
    for (const char of sentence) {
      // Increment the length of the sentence
        length++;

      // If the character is a space, increment the number of words
        if (char === ' ') {
        wordCount++;
    }

      // If the character is a vowel, increment the number of vowels
    if ('aeiou'.includes(char.toLowerCase())) {
        vowelCount++;
    }
    }

    // Add 1 to the word count to account for the first word
    wordCount++;

    // Return the analysis of the sentence
    return { length, wordCount, vowelCount };
    }

  // Example usage:
const exampleSentence = "Hello, world! This is an example sentence.";
const analysis = analyzeSentence(exampleSentence);
console.log("Sentence analysis:", analysis);
/*
  LeetCode 60 - Permutation Sequence

  Question:
  The set [1, 2, ..., n] contains n! unique permutations arranged in lexicographic order.
  Given integers n and k, return the kth permutation sequence in the sorted order.

  Example:
  Input: n = 3, k = 3
  Output: "123"

  Explanation:
  The permutations of [1, 2, 3] in order are:
  123, 132, 213, 231, 312, 321
  So the 3rd permutation is 213.

  Approach:
  - We build the answer one digit at a time.
  - For the remaining numbers, each choice corresponds to a block of permutations.
  - The index of the chosen number is calculated using factorial-based grouping.
  - After choosing a number, we remove it and continue with the remaining set.
*/

// Returns n! using recursion.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Returns the kth permutation of numbers from 1 to n.
function permutationSequence(n, k) {
    // Numbers available to place in the current position.
    let numbers = Array.from({ length: n }, (_, i) => i + 1);

    // Final answer string.
    let result = "";

    // Number of permutations in each group for the current remaining set.
    // For example, if we have 3 numbers left, each first digit is repeated factorial(2) times.
    let groupSize = factorial(n - 1);

    // Convert to 0-based indexing because arrays are 0-indexed.
    let zeroBasedK = k - 1;

    // Keep selecting the next digit until all numbers are used.
    while (numbers.length > 0) {
        // How many complete groups of permutations are skipped before choosing this digit.
        let selectedIndex = Math.floor(zeroBasedK / groupSize);

        // Append the selected number to the answer.
        result += numbers[selectedIndex];

        // Remove the chosen number from the available list.
        numbers.splice(selectedIndex, 1);

        // Reduce the k within the current group.
        zeroBasedK = zeroBasedK % groupSize;

        // If more numbers remain, each next decision has smaller groups.
        if (numbers.length > 0) {
            groupSize = groupSize / numbers.length;
        }
    }

    return result;
}